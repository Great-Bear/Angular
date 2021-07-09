using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiBlog.Models;

namespace WebApiBlog.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BlogOperationController : ControllerBase
    {
        BlogContext db;
        public BlogOperationController(BlogContext context)
        {
            db = context;
        }
        
        [HttpGet("{id:int}")]
        public ActionResult<Blog> Get(int id)
        {
            var a = db.Blogs.ToList();

           return db.Blogs.FirstOrDefault(blog => blog.Id == id);
        }     
        [HttpPost]
        public void Edit(Blog blog)
        {
            db.Blogs.Update(blog);
            db.SaveChanges();
        }
        [HttpPost("Create/{a}")]
        public void Create(Blog blog,int a = 0)
        {
            blog.AuthorId = db.Authors.FirstOrDefault(Auth => Auth.Name == blog.AuthorName).Id;
            db.Blogs.Add(blog);
            db.SaveChanges();
        }
        [HttpDelete("{id}")]
        public void DeleteBlog(int id)
        {
            var delBlog = db.Blogs.FirstOrDefault(Blog => Blog.Id == id);
            db.Blogs.Remove(delBlog);
            db.SaveChanges();
        }
    }
}
