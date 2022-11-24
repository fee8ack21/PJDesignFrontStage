using Microsoft.AspNetCore.Mvc;
using PJDesignFrontStage.Models.VCModel;
using System.Threading.Tasks;

namespace PJDesignFrontStage.ViewComponents
{
    public class SearchBar : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(SearchBarVCModel model)
        {
            return View(model);
        }
    }
}
