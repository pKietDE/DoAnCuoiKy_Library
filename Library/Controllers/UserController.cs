using Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Library.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View(DanhSachLogin.dsUserLogins);
        }
        public ActionResult Login()
        {
            ViewBag.username = "phankiet2004";
            ViewBag.password = " gihoichi01";
            return View(new LoginModel() ) ;
        }
        public ActionResult Luu(LoginModel model) 
        {
           

            if ( model.UserName == null)
            {
                ModelState.AddModelError("", "Phải Nhập Tên Đăng Nhập");
                return View();
            }
            if (model.Password == null)
            {
                ModelState.AddModelError("", "Chưa Nhập Mật Khâu");
                return View();

            }
         

            return View(model);
        }


    }
}