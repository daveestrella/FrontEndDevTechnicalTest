using FrontEndTest2.BL.EmployeeService;
using System.Web.Mvc;

namespace FrontEndTest2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public JsonResult GetAllEmployees()
        {
            var result = EmployeeService.GetEmployeeList();

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}