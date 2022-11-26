using App.MVC.Models.EFModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace App.MVC.ViewComponents
{
    public class Header : ViewComponent
    {
        private readonly PjdesignContext _context;

        public Header(PjdesignContext context)
        {
            _context = context;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var a = _context.TblEftests.ToList();
            return View();
        }
    }
}
