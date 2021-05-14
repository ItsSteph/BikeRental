using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BikeRental.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AnimalsController : ControllerBase
    {
        List<string> animals = new List<string>(){"tiger", "lion", "monkey", "kangaroo"};

        private Dictionary<string, string> something = new Dictionary<string, string>();

        public AnimalsController()
        {
            something.Add("1","Zebra");
            something.Add("2","Monkey");
            something.Add("3","Lion");
            something.Add("4","Tiger");
            something.Add("5","Kangaroo");
        }



        [HttpGet]
        public ActionResult<string> GetAnimals()
        {


            return Ok(animals);
           
        }

        [HttpGet("{id}")] //:Guid

        public ActionResult GetSomething(string id)
        {
            var somethingToReturn = something[id];
            return Ok(somethingToReturn);
        }

        [HttpPost]

        public ActionResult AddAnimal()
        {
            return Created("", "");
        }

        [HttpPut]
        
        public ActionResult Replaceanimal()
        {
            return Ok("reaplace route");
        }
        
        [HttpDelete]

        public ActionResult DeleteAnimal()
        {
            return NoContent();
        }
    }
}
