using Microsoft.AspNetCore.Mvc;
using PJDesign_Front_Stage.Models.VCModel;
using System.Threading.Tasks;

namespace PJDesign_Front_Stage.ViewComponents
{
    public class SearchBar : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(SearchBarVCModel model)
        {
            return View(model);
        }
    }
}
