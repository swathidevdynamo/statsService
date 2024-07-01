import express from "express";
import { create, fetch } from "../controller/statsController.js";

const route = express.Router();

route.get("/stats", fetch);

route.post ("/create",create)

export default route;