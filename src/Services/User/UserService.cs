using DataBox.Database.Contexts;
using DataBox.Entities;
using DataBox.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationContext _context;
        private readonly IConfiguration _configuration;

        public UserService(ApplicationContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<User> Add(User entity)
        {
            if (await _context.Set<User>().AnyAsync(u => u.Name == entity.Name && u.Password == entity.Password))
                return null;

            _context.Set<User>().Add(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task<User> Remove(int id)
        {
            var entity = await _context.Set<User>().FindAsync(id);

            if (entity == null)
            {
                return entity;
            }

            _context.Set<User>().Remove(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task<User> Get(int id)
        {
            return await _context.Set<User>().FindAsync(id);
        }

        public async Task<List<User>> GetAll()
        {
            return await _context.Set<User>().ToListAsync();
        }

        public async Task<User> Update(User entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest request)
        {
            var user = await _context.Set<User>().SingleOrDefaultAsync(u => u.Name == request.Name && u.Password == request.Password);

            if (user == null)
                return null;

            var jwt = GenerateJwt(user);
            var refreshToken = GenerateRefreshToken();

            user.RefreshTokens.Add(refreshToken);

            await Update(user);

            return new AuthenticateResponse(user, jwt, refreshToken.Token);
        }

        public async Task<bool> RevokeToken(string token)
        {
            var user = await _context.Set<User>().SingleOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));

            if (user == null)
                return false;

            var refreshToken = user.RefreshTokens.Single(t => t.Token == token);

            if (!refreshToken.IsActive)
                return false;

            refreshToken.Revoked = DateTime.Now;

            await Update(user);

            return true;
        }

        public async Task<AuthenticateResponse> RefreshToken(string token)
        {
            var user = await _context.Set<User>().SingleOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));

            if (user == null)
                return null;

            var refreshToken = user.RefreshTokens.Single(t => t.Token == token);

            if (!refreshToken.IsActive)
                return null;

            var newRefreshToken = GenerateRefreshToken();

            // Change old token properties.
            refreshToken.Revoked = DateTime.Now;
            refreshToken.ReplacedByToken = newRefreshToken.Token;

            user.RefreshTokens.Add(newRefreshToken);

            var jwt = GenerateJwt(user);

            await Update(user);

            return new AuthenticateResponse(user, jwt, newRefreshToken.Token);
        }

        #region Additional Functions.
        private string GenerateJwt(User user)
        {
            var jwt = new JwtSecurityToken(
                    issuer: _configuration["JWT:Issuer"],
                    audience: _configuration["JWT:Audience"],
                    notBefore: DateTime.Now,
                    claims: GetClaims(user).Claims,
                    expires: DateTime.Now.Add(TimeSpan.FromMinutes(int.Parse(_configuration["JWT:Lifetime"]))),
                    signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:ServerSecret"])), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler()
                .WriteToken(jwt);

            return encodedJwt;
        }

        private ClaimsIdentity GetClaims(User user)
        {
            var claims = new List<Claim>
                {
                    new Claim("name", user.Name),
                    new Claim("role", user.Role.ToString())
                };

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", "name", "role");

            return claimsIdentity;
        }

        private RefreshToken GenerateRefreshToken()
        {
            using (var rngCryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                var randomBytes = new byte[64];

                rngCryptoServiceProvider.GetBytes(randomBytes);

                return new RefreshToken
                {
                    Token = Convert.ToBase64String(randomBytes),
                    Expires = DateTime.Now.AddDays(5),
                    Created = DateTime.Now
                };
            }
        }
        #endregion
    }
}
