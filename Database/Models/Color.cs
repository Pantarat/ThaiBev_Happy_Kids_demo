namespace Happy_kids_website.Database.Models
{
    public class Color
    {
        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public Color(string Name, string ImageUrl)
        {
            this.Name = Name;
            this.ImageUrl = ImageUrl;
        }
    }
}
