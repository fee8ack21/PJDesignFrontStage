﻿using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace PJDesign_Front_Stage.ViewComponents
{
    public class Pagination : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}
