using Happy_kids_website.Database.Models;

namespace Happy_kids_website.Business
{
    public class ProductServices : IProductServices
    {
        public List<Product> GetProducts()
        {
            return new List<Product>()
            {
                new Product(
                    "sg111",
                    "bodysuit",
                    19.99,
                    new List<Color>() {
                        new Color("black","/path1"),
                        new Color("blue","/path2")
                    },
                    new List<string>() {"size1","size2"}
                    ),
                new Product(
                    "Product2",
                    "shirt",
                    29.99,
                    new List<Color>() {
                        new Color("black","/path3"),
                        new Color("blue","/path4")
                    },
                    new List<string>() {"size3","size4"}
                    )
            };
        }
    }
}
