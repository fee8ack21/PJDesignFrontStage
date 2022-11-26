using Microsoft.AspNetCore.Mvc;
using App.MVC.Models.VCModel;
using System.Threading.Tasks;

namespace App.MVC.ViewComponents
{
    public class Banner : ViewComponent
    {
        public IViewComponentResult Invoke(BannerVCModel model)
        {
            return View(model);
        }
    }
}
