using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rasmusj.se
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = parameters => {
                return View["home/index"];
            };
        }
    }
}
