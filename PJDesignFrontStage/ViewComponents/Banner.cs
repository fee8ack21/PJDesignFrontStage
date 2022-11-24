using Microsoft.AspNetCore.Mvc;
using PJDesignFrontStage.Models.VCModel;
using System.Threading.Tasks;

namespace PJDesignFrontStage.ViewComponents
{
    public class Banner : ViewComponent
    {
        public IViewComponentResult Invoke(BannerVCModel model)
        {
            return View(model);
        }
    }
}
