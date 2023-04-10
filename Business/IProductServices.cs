using Happy_kids_website.Database.Models;
using Microsoft.AspNetCore.Http;

namespace Happy_kids_website.Business

{
    public interface IProductServices
    {
        List<Product> GetProducts();

        List<Product> GetProductsFilterType(string typeString);

        List<Product> GetProductsFilterPrice(string priceString);

        List<Product> GetProductsFilterColor(string colorString);

        List<Product> GetProductsFilterSize(string sizeString);
    }
}
