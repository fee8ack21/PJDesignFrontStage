﻿using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace PJDesignFrontStage.ViewComponents
{
    public class Loader : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}