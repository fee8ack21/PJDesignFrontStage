using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace App.MVC.ViewComponents
{
    public class Header : ViewComponent
    {
        public Header()
        {
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}
