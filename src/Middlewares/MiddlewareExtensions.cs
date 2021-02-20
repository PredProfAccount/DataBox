using Microsoft.AspNetCore.Builder;

namespace DataBox.Middlewares
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseSecureHeaders(this IApplicationBuilder builder)
        {
            builder.UseMiddleware<SecureMiddleware>();

            return builder;
        }
    }
}
