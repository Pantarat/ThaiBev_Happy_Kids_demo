By Pantarat Vichathai, 12/4/2023

This project is dedicated to Skillkamp's business case as a fullstack web developer to create an e-commerce, children's clothes website called Happy Kids.

-To open the website, you must:
	1. Have MongoDB in your system.
		The default connection string for this project is "mongodb://localhost:27017" which is the default for MongoDB.
		The database should be named "happyKids" with a collection named "Products".
		To change these settings, you can edit them in Properties/launchSettings.json.
	2. Open Microsoft visual studio then select open the file "Happy_kids_website.sln".
	3. Run the website.

**To create, update, or delete products from the database, you must modify the "Database/Models/allProducts.json" file.**

-On startup, the program will clear all data existing in the database then add all data from "allProducts.json" into it.


The Frontend uses ReactJS ver18.2.0.
-The website includes 5 pages.
	-The first page is home page which contains a rotating promotion banner and a new arrivals list of products.
	-The second page is shop collection page which you can filter what products you want to see, the filter parameters includes:
			-Collection(Type)
			-Price
			-Color
			-Size
		the filter uses web API "/api/Product/shop-collection" to retrieve data based on given parameters.
	-The third, fourth and fifth pages including Contact, Our story, and View cart pages were not implemented.
	-There is a special page using swagger to inspect the APIs of the web. To go there, add "/swagger" to the back of base url.



The Backend uses .NET framework 6.
-The website contains two 'GET' APIs to retrieve products from the database.
	-The first API is "/api/Product", it retrieves all Products within the database.
	-The second API is "/api/Product/shop-collection" which retrieve products from query string having four parameters:
		-Collection(Type) : get any products with the same type
		-Price: get any products within the given price range
		-Color: get any products that have the given color option.
		-Size: get any products that have all the given size options.