using DataBox.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataBox.Database.Contexts
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }
    }
}
