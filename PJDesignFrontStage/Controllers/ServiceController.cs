using Microsoft.AspNetCore.Mvc;

namespace PJDesignFrontStage.Controllers
{
    public class ServiceController : Controller
    {
        public IActionResult Question()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
    }
}
