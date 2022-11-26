using Microsoft.AspNetCore.Mvc;

namespace App.MVC.Controllers
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
