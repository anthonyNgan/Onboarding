using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Project_Talent.Models;

namespace Project_Talent.Controllers
{
    public class CustomersController : Controller
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        // GET: Customers
        public JsonResult GetCustomerData()
        {
            talentEntities db = new talentEntities();
            try
            {
                var customerList = db.Customers.Select(x => new { x.Id, x.Name, x.Address }).ToList();
                return new JsonResult { Data = customerList, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return new JsonResult { Data = "Data Not Found", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }

        public JsonResult CreateCustomer(Customer customer)
        {
            talentEntities db = new talentEntities();
            try
            {
                db.Customers.Add(customer);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                Console.Write("Exception Occured /n {0}", e.Data);
                return new JsonResult { Data = "Create Customer Failed", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
            return new JsonResult { Data = "Customer created", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        public JsonResult UpdateCustomer(Customer customer)
        {
            talentEntities db = new talentEntities();
            try
            {
                Customer dbCustomers = db.Customers.Where(x => x.Id == customer.Id).SingleOrDefault();
                dbCustomers.Name = customer.Name;
                dbCustomers.Address = customer.Address;
                db.SaveChanges();
            }
            catch (Exception e)
            {
                Console.Write("Exception Occured /n {0}", e.Data);
                return new JsonResult { Data = "Update Failed", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
            return new JsonResult { Data = "Customer details updated", JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }

        public JsonResult EditCustomer(int id)
        {
            talentEntities db = new talentEntities();

            try
            {
                Customer customer = db.Customers.Where(x => x.Id == id).SingleOrDefault();
                return new JsonResult { Data = customer, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
            catch (Exception e)
            {
                Console.Write("Exception Occured /n {0}", e.Data);
                return new JsonResult { Data = "Customer Not Found", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }

        //Delete Customer
        public JsonResult DeleteCustomer(int id)
        {
            talentEntities db = new talentEntities();

            try
            {
                var customer = db.Customers.Where(x => x.Id == id).SingleOrDefault();
                if (customer != null)
                {
                    db.Customers.Remove(customer);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                Console.Write("Exception Occured /n {0}", e.Data);
                return new JsonResult { Data = "Deletion Failed", JsonRequestBehavior = JsonRequestBehavior.AllowGet };

            }
            return new JsonResult { Data = "Success Customer Deleted", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}
