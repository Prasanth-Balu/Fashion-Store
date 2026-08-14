const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require("../middleware/adminMiddleware");
const {createOrder, getAllOrders,updateOrderStatus} = require('../controllers/orderController')

const router = express.Router()

router.post('/',
    authMiddleware,
    createOrder
)
router.get(
    "/",
    authMiddleware,
    adminMiddleware,
    getAllOrders
);


router.put(
    "/:id/status",
    authMiddleware,
    adminMiddleware,
    updateOrderStatus
);

module.exports = router