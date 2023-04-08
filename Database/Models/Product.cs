using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;


namespace Happy_kids_website.Database.Models
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ProductID { get; set; }

        public string Type { get; set; }

        public double Price { get; set; }

        public List<Color> Colors { get; set; }

        public List<string> Sizes { get; set; }
    }
}
