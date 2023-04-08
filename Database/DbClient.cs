using Happy_kids_website.Database.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Happy_kids_website.Database
{
    public class DbClient : IDbClient
    {
        private readonly IMongoDatabase _database;
        public DbClient(IOptions<DbConfig> dbConfig)
        {
            var client = new MongoClient(dbConfig.Value.Connection_String);
            _database = client.GetDatabase(dbConfig.Value.Database_Name);
        }

        public IMongoCollection<Product> GetProductsCollection() =>
            _database.GetCollection<Product>("Products");
    }
}
