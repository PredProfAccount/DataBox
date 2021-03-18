using DataBox.Entities.Authentication;
using DataBox.Models.Authentication;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataBox.Services
{
    public interface IUserService
    {
        Task<List<User>> GetAll();
        Task<User> Get(int id);
        Task<User> Add(User entity);
        Task<User> Update(User entity);
        Task<User> Remove(int id);

        // Authentication.
        Task<AuthenticateResponse> Authenticate(AuthenticateRequest request);
        Task<bool> RevokeToken(string token);
        Task<AuthenticateResponse> RefreshToken(string token);
    }
}
