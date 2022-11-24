using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace PJDesignFrontStage.ViewComponents
{
    public class Footer : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}
