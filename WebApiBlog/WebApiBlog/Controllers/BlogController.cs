using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiBlog.Models;
using System.Security.Cryptography;
using System.Text;
using System.IO;

namespace WebApiBlog.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        BlogContext db;
        public BlogController(BlogContext context)
        {
            db = context;
            if (!db.Blogs.Any())
            {
                db.Blogs.Add(new Blog
                {
                    Name = "Blog 1",
                    Author = "Bob",
                    Date = new DateTime(),
                    CountComents = 0,
                    Text = "For blog 1 test text is here "
                });
                db.Blogs.Add(new Blog
                {
                    Name = "Blog 2",
                    Author = "Bob2",
                    Date = new DateTime(),
                    CountComents = 0,
                    Text = "For blog 2 test text is here "
                });
            }
            db.SaveChanges();
        }

        [HttpGet("{nameBlog=null}")]
        public async Task<ActionResult<IEnumerable<Blog>>> Get(string nameBlog)
        {
            if (nameBlog == "null")
            {
                return await db.Blogs.ToListAsync();
            }
            else 
            {
                return await db.Blogs.
                             Where(blog => blog.Name.IndexOf(nameBlog) > -1).ToListAsync();
            }
        }
    }
}
