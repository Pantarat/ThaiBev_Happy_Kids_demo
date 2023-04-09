using Happy_kids_website.Business;
using Happy_kids_website.Database.Models;
using Microsoft.AspNetCore.Mvc;

namespace Happy_kids_website.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductServices _productServices;

        public ProductController(IProductServices productServices)
        {
            _productServices = productServices;
        }

        [HttpGet]
        public ActionResult<List<Product>>  Get() 
        {
            /*return Ok(_productServices.GetProducts());*/
            var products = new List<Product>()
            {
                new Product()
                {
                    ProductID = "sg111",
                    Type = "bodysuit",
                    Price = 19.99,
                    Colors = {new Color
                    {
                        Name = "Magenta",
                        ImageUrl = "/path1"
                    },
                    new Color
                    {
                        Name = "Black",
                        ImageUrl = "/path2"
                    } },
                    Sizes = {"1 month","2 month"}
                }
            };
            return Ok(products);
        }
    }
}
