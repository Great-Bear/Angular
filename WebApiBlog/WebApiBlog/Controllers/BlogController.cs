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
                db.Authors.Add(new Author
                {
                    Name = "Bob",
                    Login = "1",
                    Password = "A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ="
                });
                db.Authors.Add(new Author
                {
                    Name = "Stiv",
                    Login = "2",
                    Password = "A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ="
                });
                db.Blogs.Add(new Blog
                {
                    Name = "Blog about penguine",
                    Date = new DateTime(),
                    CountComents = 0,
                    Text = "Penguins (order Sphenisciformes /sfɪˈnɪsɪfɔːrmiːz/, family Spheniscidae /sfɪˈnɪsɪdiː/) are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galápagos penguin, found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch while swimming underwater. They spend roughly half of their lives on land and the other half in the sea.Penguins (order Sphenisciformes /sfɪˈnɪsɪfɔːrmiːz/, family Spheniscidae /sfɪˈnɪsɪdiː/) are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galápagos penguin, found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch while swimming underwater. They spend roughly half of their lives on land and the other half in the sea.Penguins (order Sphenisciformes /sfɪˈnɪsɪfɔːrmiːz/, family Spheniscidae /sfɪˈnɪsɪdiː/) are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galápagos penguin, found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch while swimming underwater. They spend roughly half of their lives on land and the other half in the sea.Penguins (order Sphenisciformes /sfɪˈnɪsɪfɔːrmiːz/, family Spheniscidae /sfɪˈnɪsɪdiː/) are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galápagos penguin, found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch while swimming underwater. They spend roughly half of their lives on land and the other half in the sea.",
                    NamePicture = "Penguins.png",
                    AuthorId = 1,
                    AuthorName = "Bob"
                }) ;
                db.Blogs.Add(new Blog
                {
                    Name = "Блог про льва",
                    Date = new DateTime(),
                    CountComents = 0,
                    Text = "Лев[1] (лат. Panthera leo) — вид хищных млекопитающих, один из пяти представителей рода пантер (Panthera), относящегося к подсемейству больших кошек (Pantherinae) в составе семейства кошачьих (Felidae). Наряду с тигром — самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг[2]. Трудно сказать достоверно, массивнее ли крупнейшие подвиды льва, чем крупнейшие подвиды тигров. Связано это с тем, что исторические очень крупные веса амурских тигров в большинстве своём признаны недостаточно достоверными[3]. Достаточными данными о размерах и массе представителей крупнейших подвидов льва (например, барбарийском) наука не располагает. Что касается живущих в неволе животных, они часто являют собой смешение разных подвидов. Существует мнение, что львы в неволе несколько превышают тигров в размерах и массе[4], так же как и обратное ему.Лев[1] (лат. Panthera leo) — вид хищных млекопитающих, один из пяти представителей рода пантер (Panthera), относящегося к подсемейству больших кошек (Pantherinae) в составе семейства кошачьих (Felidae). Наряду с тигром — самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг[2]. Трудно сказать достоверно, массивнее ли крупнейшие подвиды льва, чем крупнейшие подвиды тигров. Связано это с тем, что исторические очень крупные веса амурских тигров в большинстве своём признаны недостаточно достоверными[3]. Достаточными данными о размерах и массе представителей крупнейших подвидов льва (например, барбарийском) наука не располагает. Что касается живущих в неволе животных, они часто являют собой смешение разных подвидов. Существует мнение, что львы в неволе несколько превышают тигров в размерах и массе[4], так же как и обратное ему.Лев[1] (лат. Panthera leo) — вид хищных млекопитающих, один из пяти представителей рода пантер (Panthera), относящегося к подсемейству больших кошек (Pantherinae) в составе семейства кошачьих (Felidae). Наряду с тигром — самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг[2]. Трудно сказать достоверно, массивнее ли крупнейшие подвиды льва, чем крупнейшие подвиды тигров. Связано это с тем, что исторические очень крупные веса амурских тигров в большинстве своём признаны недостаточно достоверными[3]. Достаточными данными о размерах и массе представителей крупнейших подвидов льва (например, барбарийском) наука не располагает. Что касается живущих в неволе животных, они часто являют собой смешение разных подвидов. Существует мнение, что львы в неволе несколько превышают тигров в размерах и массе[4], так же как и обратное ему.",
                    NamePicture = "Leo.jpg",
                    AuthorId = 2,
                    AuthorName = "Bob2"
                });
            }
            db.SaveChanges();
        }

        [HttpGet("{nameBlog=null}")]
        public  ActionResult<IEnumerable<Blog>> Get(string nameBlog)
        {
            var a = db.Blogs.ToList();
            if (nameBlog == "null")
            {
                return  db.Blogs.ToList();
            }
            else
            {
                return  db.Blogs.
                             Where(blog => blog.Name.IndexOf(nameBlog) > -1).ToList();
            }
        }
        [HttpGet("{fileName}/{id}")]
        public FileResult GetFile(string fileName, int id)
        {
            foreach (var item in Directory.GetFiles(@".\Img\"))
            {
                if (item.IndexOf(fileName) > 0)
                {
                    int startCut = item.LastIndexOf('.') + 1;
                    string expansion = item.Substring(startCut, item.Length - startCut);
                    byte[] mas = System.IO.File.ReadAllBytes($@".\Img\{fileName}");
                    string file_type = $"application/{expansion}";
                    string file_name = $"img.{expansion}";
                    return File(mas, file_type, file_name);
                }
            }
            return null;
        }
        [HttpPost]
        public ActionResult<object> SingIn(Auth auth)
        {
            var sha256 = new SHA256Managed();
            var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(auth.Password)));

            var resAuthor = db.Authors
                           .Where(author => author.Login == auth.Login && author.Password == passwordHash)
                           .FirstOrDefault();

            return new { ID = resAuthor.Id ,Author = resAuthor.Name }; 
        }

    }
}
public class Auth{
    public string Login { get; set; }
    public string Password { get; set; }
}
