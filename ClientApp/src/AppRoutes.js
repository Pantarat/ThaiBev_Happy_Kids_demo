import { Home } from "./pages/Home";
import { ShopCollection } from "./pages/ShopCollection";
import { OurStory } from "./pages/OurStory";
import { Contact } from "./pages/Contact";
import SwaggerUI from "swagger-ui-react";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/shop-collection',
        element: <ShopCollection />
    },
    {
        path: '/our-story',
        element: <OurStory />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/swagger',
        element: <SwaggerUI swaggerUrl="http://localhost:44413/swagger/v1/swagger.json" />
    }
];

export default AppRoutes;
