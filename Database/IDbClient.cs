using MongoDB.Driver;
using Happy_kids_website.Database.Models;

namespace Happy_kids_website.Database
{
    public interface IDbClient
    {
        IMongoCollection<Product> GetProductsCollection();
    }
}
