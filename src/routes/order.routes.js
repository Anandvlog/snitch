import {Router } from "express"
import authenticate from "../middlewares/auth.middleware.js"
import { createOrderValidator } from "../validator/order.validator.js"
import { cancleOrder, createOrder, getOrder, updateOrderStatus } from "../controller/order.controller.js"


const router = Router()


router.use(authenticate)

// @POST /api/orders


router.post("/", createOrderValidator, createOrder)


// @GET /api/orders

router.get("/", getOrder)


// @PATCH /api/orders/cancel/:orderid

router.patch("/cancel/:orderid", cancleOrder)


// @PATCH /api/orders/stauts/:orderid

router.patch("/status/:orderid" , updateOrderStatus)


export default router