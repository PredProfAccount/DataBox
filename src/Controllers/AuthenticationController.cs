using DataBox.Entities;
using DataBox.Models;
using DataBox.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace DataBox.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _userService.GetAll());
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            var entity = await _userService.Add(user);

            if (entity == null)
                return BadRequest(new { message = "This user already exists!" });

            return Ok(new { message = "New user was created successefuly!" });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _userService.Get(id);

            if (user == null)
                return NotFound(new { message = "User was not found!" });

            return Ok(user);
        }

        [HttpGet("{id}/refresh-tokens")]
        public async Task<IActionResult> GetRefreshTokens(int id)
        {
            var user = await _userService.Get(id);

            if (user == null)
                return NotFound(new { message = "User was not found!" });

            return Ok(user.RefreshTokens);
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateRequest request)
        {
            var response = await _userService.Authenticate(request);

            if (response == null)
                return BadRequest(new { message = "User's fields are incorrect!" });

            SetTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("refresh-token")]
        public async Task<IActionResult> RefreshToken()
        {
            var refreshToken = Request.Cookies["refreshToken"];

            if (refreshToken == null)
                return Unauthorized(new { message = "Invalid token!" });

            var response = await _userService.RefreshToken(refreshToken);

            SetTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [HttpPost("revoke-token")]
        public async Task<IActionResult> RevokeToken([FromBody] RevokeTokenRequest request)
        {
            var token = request.Token ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required!" });

            var response = await _userService.RevokeToken(token);

            if (!response)
                return NotFound(new { message = "Token not found!" });

            return Ok(new { message = "Token revoked!" });
        }

        #region Additional Functions.
        private void SetTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions()
            {
                HttpOnly = true,
                Expires = DateTime.Now.AddDays(5)
            };

            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }
        #endregion
    }
}
