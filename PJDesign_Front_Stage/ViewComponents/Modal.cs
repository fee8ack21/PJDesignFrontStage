using Microsoft.AspNetCore.Mvc;
using PJDesign_Front_Stage.Models.VCModel;

namespace PJDesign_Front_Stage.ViewComponents
{
    public class Modal : ViewComponent
    {
        public IViewComponentResult Invoke(ModalVCModel model)
        {
            return View(model);
        }
    }
}
