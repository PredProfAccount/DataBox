using DataBox.Entities;
using System.Text.Json.Serialization;
namespace DataBox.Models
{
    public class AuthenticateResponse
    {
        // User details.
        public int Id { get; set; }
        public string Name { get; set; }
        public string Jwt { get; set; }

        [JsonIgnore]
        public string RefreshToken { get; set; }

        public AuthenticateResponse(User user, string jwt, string refreshToken)
        {
            Id = user.Id;
            Name = user.Name;
            Jwt = jwt;
            RefreshToken = refreshToken;
        }
    }
}
