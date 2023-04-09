using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;


namespace Happy_kids_website.Database.Models
{
    [Serializable]
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ProductID { get; set; }

        public string ProductCode { get; set; }

        public string Type { get; set; }

        public double Price { get; set; }

        public List<Color> Colors { get; set; }

        public List<string> Sizes { get; set; }

        public Product(string ProductID, string ProductCode,string Type, double Price, List<Color> Colors, List<string> Sizes)
        {
            this.ProductID = ProductID;
            this.ProductCode = ProductCode;
            this.Type = Type;
            this.Price = Price;
            this.Colors = Colors;
            this.Sizes = Sizes;
        }
    }
}
