using Microsoft.AspNetCore.Mvc;

namespace PJDesign_Front_Stage.Controllers
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
