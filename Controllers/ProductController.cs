using Happy_kids_website.Business;
using Happy_kids_website.Database.Models;
using Microsoft.AspNetCore.Http;
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

        [HttpGet("shop-collection")]
        public ActionResult<List<Product>> GetProductsWithFilter([FromQuery] string? Collection, [FromQuery] string? Price, [FromQuery] string? Color, [FromQuery] string? Size)
        {
            var products = _productServices.GetProducts();

            if(!string.IsNullOrEmpty(Collection))
            {
                var typeProducts = _productServices.GetProductsFilterType(Collection);
                products = products
                    .Where(p1 => typeProducts.Any(p2 => p2.ProductCode == p1.ProductCode))
                    .ToList();
            }

            if (!string.IsNullOrEmpty(Price))
            {
                var priceProducts = _productServices.GetProductsFilterPrice(Price);
                products = products
                    .Where(p1 => priceProducts.Any(p2 => p2.ProductCode == p1.ProductCode))
                    .ToList();
            }

            if (!string.IsNullOrEmpty(Color))
            {
                var colorProducts = _productServices.GetProductsFilterColor(Color);
                products = products
                    .Where(p1 => colorProducts.Any(p2 => p2.ProductCode == p1.ProductCode))
                    .ToList();
            }

            if (!string.IsNullOrEmpty(Size))
            {
                var sizeProducts = _productServices.GetProductsFilterSize(Size);
                products = products
                    .Where(p1 => sizeProducts.Any(p2 => p2.ProductCode == p1.ProductCode))
                    .ToList();
            }

            return Ok(products);
        }
    }
}
