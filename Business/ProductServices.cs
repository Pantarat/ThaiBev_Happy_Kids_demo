using Happy_kids_website.Database;
using Happy_kids_website.Database.Models;
using MongoDB.Driver;

namespace Happy_kids_website.Business
{
    public class ProductServices : IProductServices
    {
        private readonly IMongoCollection<Product> _products; 

        public ProductServices(IDbClient dbClient)
        {
            _products = dbClient.GetProductsCollection();
        }

        public List<Product> GetProducts()
        {
            return _products.Find(book => true).ToList();
        }
    }
}
