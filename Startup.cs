
using System.IO;
using Kerrysiamseaport.Externalepod.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace ExternalEPODAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllersWithViews();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ExternalEPODAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            CustomAssemblyLoadContext context = new CustomAssemblyLoadContext();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                context.LoadUnmanagedLibrary(Path.GetFullPath("./Libs/AppUtils.dll"));
                context.LoadUnmanagedLibrary(Path.GetFullPath("./Libs/Interop.ActiveDs.dll"));

                
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ExternalEPODAPI v1"));
            }
            else
            {
                context.LoadUnmanagedLibrary(Path.GetFullPath("./Libs/AppUtils.dll"));
                context.LoadUnmanagedLibrary(Path.GetFullPath("./Libs/Interop.ActiveDs.dll"));
            }

            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
