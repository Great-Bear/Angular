using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using WebApiBlog.Models;


namespace WebApiBlog.Models
{
    public class BlogContext : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Author> Authors { get; set; }
        public BlogContext(DbContextOptions<BlogContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
