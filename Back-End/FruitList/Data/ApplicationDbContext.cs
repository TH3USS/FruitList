using FruitList.Models;
using Microsoft.EntityFrameworkCore;

namespace FruitList.Data
{
    public class ApplicationDbContext : DbContext
    {
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
            public DbSet<Fruit> Fruits { get; set; }
        
    }
}
