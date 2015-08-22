using Nancy.Hosting.Self;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rasmusj.se
{
    class Program
    {
        static void Main(string[] args)
        {
            HostConfiguration config = new HostConfiguration();
            config.UrlReservations.CreateAutomatically = true;

            Console.Write("Starting app...");

            using (var host = new NancyHost(new AppBootstrapper(), config, new Uri("http://localhost:1337/")))
            {
                host.Start();
                Console.ReadLine();
            }
        }
    }
}
