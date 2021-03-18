using DataBox.Repositories.ExternalStorage;
using DataBox.Services.ExternalStorage;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Net.Http;

namespace DataBox.Services
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddUserService(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();

            return services;
        }

        public static IServiceCollection AddSecurityService(this IServiceCollection services)
        {
            services.AddScoped<ISecurityService, SecurityService>();

            return services;
        }

        public static IServiceCollection AddHttpStorageService(this IServiceCollection services, Action<HttpClient> options = null)
        {
            services.AddHttpClient("ExternalStorage", options);
            services.AddSingleton<IStorageRepository, HttpStorageRepository>();
            services.AddSingleton<IStorageService, HttpStorageService>();

            return services;
        }

        public static IServiceCollection AddStorageService(this IServiceCollection services, Action<StorageOptions> configureOptions = null)
        {
            services.Configure(configureOptions);
            services.AddSingleton<IStorageRepository, StorageRepository>();
            services.AddSingleton<IStorageService, StorageService>();

            return services;
        }
    }
}