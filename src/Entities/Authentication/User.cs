using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DataBox.Entities.Authentication
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public Role Role { get; set; }

        public string Password { get; set; }

        [JsonIgnore]
        public List<RefreshToken> RefreshTokens { get; set; }
    }

    public enum Role
    {
        Default,
        Admin
    }
}