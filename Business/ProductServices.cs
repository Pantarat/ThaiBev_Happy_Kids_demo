using Happy_kids_website.Database;
using Happy_kids_website.Database.Models;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson;
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

        public List<Product> GetProductsFilterType(string typeString)
        {
            var filter = Builders<Product>.Filter.Empty;
            filter = filter & Builders<Product>.Filter.Eq(p => p.Type, typeString);
            var products = _products.Find(filter).ToList();
            return products;
        }

        public List<Product> GetProductsFilterPrice(string priceString)
        {
            var priceRangeValues = priceString.Split('-');
            if (priceRangeValues.Length == 2 && double.TryParse(priceRangeValues[0], out double minPrice) && double.TryParse(priceRangeValues[1], out double maxPrice))
            {
                var filter = Builders<Product>.Filter.Empty;
                filter = filter & Builders<Product>.Filter.And(
                Builders<Product>.Filter.Gte(p => p.Price, Convert.ToDouble(priceRangeValues[0])),
                Builders<Product>.Filter.Lte(p => p.Price, Convert.ToDouble(priceRangeValues[1])));
                var products = _products.Find(filter).ToList();
                return products;
            }
            else return new List<Product>();

        }

        public List<Product> GetProductsFilterColor(string colorString)
        {
            var filter = Builders<Product>.Filter.Empty;
            filter = filter & Builders<Product>.Filter.ElemMatch(
                p => p.Colors,
                c => c.Name == colorString);
            var products = _products.Find(filter).ToList();
            return products;
        }

        public List<Product> GetProductsFilterSize(string sizeString)
        {
            var sizeStrings = sizeString.Split(',');
            var sizes = sizeStrings.Select(s => s.Trim());
            var filter = Builders<Product>.Filter.Empty;
            filter = filter & Builders<Product>.Filter.AnyIn(
                p => p.Sizes, sizes);
            var products = _products.Find(filter).ToList();
            return products;
        }
    }
}
