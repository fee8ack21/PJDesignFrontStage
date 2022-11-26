using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace App.MVC.ViewComponents
{
    public class GoToBtn : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}
