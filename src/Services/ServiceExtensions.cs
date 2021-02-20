using Microsoft.Extensions.DependencyInjection;

namespace DataBox.Services
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddUserService(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();

            return services;
        }
    }
}
