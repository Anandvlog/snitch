import { Router } from "express";
import authenticate from "../middlewares/auth.middleware.js";
import {
  addToCartValidator,
  removeFromCartValidator,
} from "../validator/cart.validator.js";
import {
  addProductToCart,
  getCart,
  removeProductFromCart,
} from "../controller/cart.controller.js";

const router = Router();

router.use(authenticate);

// @POST /api/cart/add/product/:productId

router.post("/add/products/:productId", addToCartValidator, addProductToCart);

// @DELETE /pi/cart/remove/product/:productId

router.delete(
  "/remove/product/:productId",
  removeFromCartValidator,
  removeProductFromCart,
);

// @GET /api/cart


router.get("/", getCart)

export default router;
