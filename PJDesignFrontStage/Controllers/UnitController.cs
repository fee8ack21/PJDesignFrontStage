using Microsoft.AspNetCore.Mvc;

namespace PJDesignFrontStage.Controllers
{
    public class UnitController : Controller
    {
        public IActionResult Type1()
        {
            return View();
        }

        public IActionResult Type2(int uid)
        {
            return View();
        }

        public IActionResult Detail2(int uid, int tid)
        {
            return View();
        }
    }
}
