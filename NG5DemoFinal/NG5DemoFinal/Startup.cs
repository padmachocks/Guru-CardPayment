using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NG5DemoFinal.Startup))]
namespace NG5DemoFinal
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
