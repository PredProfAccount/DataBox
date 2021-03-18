using DataBox.Entities.Authentication;
using DataBox.Models.Authentication;
using DataBox.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateRequest request)
        {
            var response = await _userService.Authenticate(request);

            if (response == null)
                return BadRequest(new { message = "User's fields are incorrect!" });

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("refreshToken")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
        {
            if (string.IsNullOrEmpty(request.Token))
                return BadRequest(new { message = "Invalid token!" });

            var response = await _userService.RefreshToken(request.Token);

            if (response == null)
                return NotFound(new { message = "Token was not found!" });

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("revokeToken")]
        public async Task<IActionResult> RevokeToken([FromBody] RefreshTokenRequest request)
        {
            if (string.IsNullOrEmpty(request.Token))
                return BadRequest(new { message = "Token was required!" });

            var response = await _userService.RevokeToken(request.Token);

            if (!response)
                return NotFound(new { message = "Token was not found!" });

            return Ok(new { message = "Token revoked!" });
        }
    }
}
