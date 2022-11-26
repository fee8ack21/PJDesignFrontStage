using Microsoft.AspNetCore.Mvc;
using App.MVC.Models.VCModel;

namespace App.MVC.ViewComponents
{
    public class Modal : ViewComponent
    {
        public IViewComponentResult Invoke(ModalVCModel model)
        {
            return View(model);
        }
    }
}
