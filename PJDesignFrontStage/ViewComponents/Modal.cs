using Microsoft.AspNetCore.Mvc;
using PJDesignFrontStage.Models.VCModel;

namespace PJDesignFrontStage.ViewComponents
{
    public class Modal : ViewComponent
    {
        public IViewComponentResult Invoke(ModalVCModel model)
        {
            return View(model);
        }
    }
}
