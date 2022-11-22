using Microsoft.AspNetCore.Mvc;
using PJDesign_Front_Stage.Models.VCModel;
using System.Threading.Tasks;

namespace PJDesign_Front_Stage.ViewComponents
{
    public class Banner : ViewComponent
    {
        public IViewComponentResult Invoke(BannerVCModel model)
        {
            return View(model);
        }
    }
}
