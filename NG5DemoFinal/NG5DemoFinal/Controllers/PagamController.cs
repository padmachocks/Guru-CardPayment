using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NG5DemoFinal.Controllers
{
    public class PagamController : Controller
    {
        // GET: Pagam
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Pagam()
        {
            return View();
        }

        // GET: Pagam/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Pagam/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Pagam/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Pagam/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Pagam/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Pagam/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Pagam/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
        [HttpGet]
        public JsonResult TestAPI()
        {
            return Json("testvalue" , JsonRequestBehavior.AllowGet);
        }

    }
}
