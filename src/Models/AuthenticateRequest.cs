using System.ComponentModel.DataAnnotations;

namespace DataBox.Models
{
    public class AuthenticateRequest
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
