using Happy_kids_website.Business;
using Happy_kids_website.Database.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Happy_kids_website.Database;
using Microsoft.Extensions.Options;
using System.Runtime.CompilerServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. 
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IProductServices, ProductServices>();

builder.Services.AddControllersWithViews();

//Configure MongoDB Database
var configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile("appsettings.Development.json", optional: true)
    .AddEnvironmentVariables()
    .AddCommandLine(args)
    .AddJsonFile("Properties\\launchSettings.json", optional: true)
    .Build();
builder.Services.AddSingleton(configuration);
builder.Services.Configure<DbConfig>(configuration);

var dbConfigSection = configuration.GetSection("profiles:Happy_kids_website:environmentVariables");
var dbConfig = new DbConfig();
dbConfig.Connection_String = configuration["CONNECTION_STRING"];
dbConfig.Database_Name = configuration["DATABASE_NAME"];
dbConfig.Products_Collection_Name = configuration["PRODUCTS_COLLECTION_NAME"];

var mongoClient = new MongoClient(dbConfig.Connection_String);
var database = mongoClient.GetDatabase(dbConfig.Database_Name);
var collection = database.GetCollection<Product>(dbConfig.Products_Collection_Name);
builder.Services.AddSingleton(collection);
builder.Services.AddSingleton<IDbClient, DbClient>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.UseStaticFiles();
app.UseRouting();
app.UseCors("AllowAllOrigins");

app.MapFallbackToFile("index.html"); ;

// Add data to Mongo Database
var json = File.ReadAllText("./Database/allProducts.json");
var products = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Product>>(json);
foreach (var product in products)
{
    product.ProductID = ObjectId.GenerateNewId().ToString();
}
collection.DeleteMany(new BsonDocument());
collection.InsertMany(products);




app.Run();
