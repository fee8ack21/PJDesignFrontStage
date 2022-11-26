using Microsoft.AspNetCore.Mvc;
using App.MVC.Models.VCModel;
using System.Threading.Tasks;

namespace App.MVC.ViewComponents
{
    public class SearchBar : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(SearchBarVCModel model)
        {
            return View(model);
        }
    }
}
