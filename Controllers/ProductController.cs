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
        public ActionResult<List<Product>> GetProducts() 
        {
            var products = _productServices.GetProducts();
            return Ok(products);
        }
    }
}
