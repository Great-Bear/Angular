using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiBlog.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public ushort CountComents { get; set; }
        public string Text { get; set; }
        public string NamePicture { get; set; }

        public int? AuthorId { get; set; }
        public Author Author { get; set; }
    }
}
