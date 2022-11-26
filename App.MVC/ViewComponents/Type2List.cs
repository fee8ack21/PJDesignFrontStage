using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace App.MVC.ViewComponents
{
    public class Type2List : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}
