import express from "express"
import orderRoutes from "./orderRoutes.js";
import rateResRoutes from "./rateRoutes.js";
import likeResRoutes from "./likeRes.js";

const rootRoutes = express.Router();

rootRoutes.use(likeResRoutes)
rootRoutes.use(rateResRoutes)
rootRoutes.use(orderRoutes)

export default rootRoutes ;