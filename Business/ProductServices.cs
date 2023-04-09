using Happy_kids_website.Database.Models;

namespace Happy_kids_website.Business
{
    public class ProductServices : IProductServices
    {
        public List<Product> GetProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    ProductID = "sg111",
                    Type = "bodysuit",
                    Price = 19.99,
                    Colors = {new Color
                    {
                        Name = "Magenta",
                        ImageUrl = "/path1"
                    },
                    new Color
                    {
                        Name = "Black",
                        ImageUrl = "/path2"
                    } },
                    Sizes = {"1 month","2 month"}
                }
            };
        }
    }
}
