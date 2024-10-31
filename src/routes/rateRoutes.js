import express from "express";
import { rateRes, rateResByRes, rateResByUser } from "../controller/rateRes.controller.js";

const rateResRoutes = express.Router();
rateResRoutes.get("/rate-res-by-res/:res_id",rateResByRes);
rateResRoutes.get("/rate-res-by-user",rateResByUser)
rateResRoutes.post("/rate-res",rateRes)
export default rateResRoutes ;