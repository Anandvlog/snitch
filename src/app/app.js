import express from "express";
import morgan from "morgan";
import authRoutes from "../routes/auth.routes.js";
import productRoutes from "../routes/product.routes.js"
import cartRoutes from "../routes/cart.routes.js"
import orderRoutes from "../routes/order.routes.js"
import checkRoutes from "../routes/check.router.js"



const app = express();
app.use(morgan("dev"));
app.use(express.json())


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes)

app.use("/", checkRoutes)

export default app;
