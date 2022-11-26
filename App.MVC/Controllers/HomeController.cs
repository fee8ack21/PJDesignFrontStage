using Microsoft.AspNetCore.Mvc;
using App.MVC.Models;
using App.MVC.Models.EFModel;
using System.Diagnostics;

namespace App.MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private PjdesignContext _context;

        public HomeController(ILogger<HomeController> logger, PjdesignContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            using (var c = new PjdesignContext())
            {
                var a = c.TblEftests.ToList();
            }

            return View();
        }

        public IActionResult Portfolio()
        {
            return View();
        }

        [Route("{controller}/Portfolio/{id:int}")]
        public IActionResult PortfolioDetail(int id)
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}