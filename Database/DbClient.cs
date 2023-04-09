using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Happy_kids_website.Database.Models;

namespace Happy_kids_website.Database
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<Product> _products;
        public DbClient(IOptions<DbConfig> dbConfig)
        {
            var client = new MongoClient(dbConfig.Value.Connection_String);
            var database = client.GetDatabase(dbConfig.Value.Database_Name);
            _products = database.GetCollection<Product>(dbConfig.Value.Products_Collection_Name);
        }

        public IMongoCollection<Product> GetProductsCollection()
        {
            return _products; 
        }
            
    }
}
