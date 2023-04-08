using Happy_kids_website.Business;
using Microsoft.AspNetCore.Mvc;

namespace Happy_kids_website.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductServices _productServices; 

    public ProductController(IProductServices  productServices)
    {
        _productServices = productServices;
    }

    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(_productServices.GetProducts());
    }
}
