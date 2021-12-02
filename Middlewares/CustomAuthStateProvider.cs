using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Authorization;


namespace Kerrysiamseaport.Externalepod.Middlewares
{
    public class CustomAuthStateProvider : AuthenticationStateProvider
    {
        public static bool IsAuthenticated { get; set; }
        public static bool IsAuthenticating { get; set; }
        public override async Task<AuthenticationState> GetAuthenticationStateAsync()
        {
            ClaimsIdentity identity;

            if (IsAuthenticating)
            {
                return null;
            }
            else if (IsAuthenticated)
            {
                identity = new ClaimsIdentity(new List<Claim>
                        {
                            new Claim(ClaimTypes.Name, "TestUser")

                        }, "WebApiAuth");
            }
            else
            {
                identity = new ClaimsIdentity();
            }

            return await Task.FromResult(new AuthenticationState(new ClaimsPrincipal(identity)));
        }

        public void NotifyAuthenticationStateChanged()
        {
            NotifyAuthenticationStateChanged(GetAuthenticationStateAsync());
        }
    }
}
