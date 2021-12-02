using Kerrysiamseaport.Externalepod.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kerrysiamseaport.Externalepod.Controllers
{
    [Route("/")]
    public class HealthController : Controller
    {
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("health")]
        public IActionResult Check()
        {
            ResultData resultData = new ResultData();
            resultData.Result = true;
            resultData.StatusCode = StatusCodes.Status200OK;
            return Json(resultData);
        }
    }
}