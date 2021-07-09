using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using WebApiBlog.Models;

namespace WebApiBlog.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        BlogContext db;
        public AccountController(BlogContext context)
        {
            db = context;
        }
       [HttpPost]
       public string CreateUser(Author author)
       {
            bool IsBusyLogin = false;
            bool IsExistUser = false;
            bool IsBusyName = false;

            var Authors = db.Authors.ToList();
            foreach (var item in Authors)
            {
               if(item.Login == author.Login && item.Name == author.Name)
               {
                    IsExistUser = true;
               }
               if(item.Login == author.Login)
               {
                    IsBusyLogin = true;
               }
               if(item.Name == author.Name)
               {
                    IsBusyName = true;
               }             
            }

            if(IsExistUser)
            {
                return "Such user stil exist";
            }
            else if (IsBusyName) 
            {
                return "Such name busy";
            }
            else if (IsBusyLogin)
            {
                return "Such login is busy";
            }
            else 
            {
                var sha256 = new SHA256Managed();
                author.Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(author.Password)));

                db.Authors.Add(author);
                db.SaveChanges();
                return "";
            }
       }
    }
}
