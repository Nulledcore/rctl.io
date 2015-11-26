using Nancy;
using Nancy.ErrorHandling;
using Nancy.Responses.Negotiation;
using Nancy.ViewEngines;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rasmusj.se
{
    public class ErrorStatusCodeHandler : IStatusCodeHandler
    {
        private readonly IViewRenderer _responseNegotiator;

        public ErrorStatusCodeHandler(IViewRenderer responseNegotiator)
        {
            this._responseNegotiator = responseNegotiator;
        }

        public bool HandlesStatusCode(HttpStatusCode statusCode, NancyContext context)
        {
            return (int)statusCode > 200;
        }

        public void Handle(HttpStatusCode statusCode, NancyContext context)
        {
            var response = new Negotiator(context);

            Error error = null;
            if (context.Items.ContainsKey("OnErrorException"))
            {
                var exception = context.Items["OnErrorException"] as Exception;
                error = new Error { ErrorMessage = exception.Message, FullException = exception.ToString() };
            }

            if (statusCode == HttpStatusCode.NotFound)
            {
                context.Response = _responseNegotiator.RenderView(context, "Error/404", error).WithStatusCode(statusCode);
            }
            else
            {
                context.Response = _responseNegotiator.RenderView(context, "Error/5xx", error).WithStatusCode(statusCode);
            } 

            
            

        }
    }
}