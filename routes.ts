import { Router } from "https://deno.land/x/oak/mod.ts";
import {getProducts} from "./controller/products.ts";

const router = new Router();

router.get("/products", getProducts);

export default router 