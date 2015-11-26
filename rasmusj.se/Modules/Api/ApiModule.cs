using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rasmusj.se.Modules.Api
{
    public class ApiModule : NancyModule
    {

        public ApiModule() : base("/api")
        {
            
        }

    }
}
