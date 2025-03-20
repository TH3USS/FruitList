using FruitList.Data;
using FruitList.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace FruitList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FruitsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public FruitsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fruit>>> GetFruits()
        {
            return await _context.Fruits.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Fruit>> PostFruit(Fruit fruit)
        {
            _context.Fruits.Add(fruit);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetFruits", new { id = fruit.Id }, fruit);
        }
    }
}
