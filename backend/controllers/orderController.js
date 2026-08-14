const Order = require("../models/orderModel");
const Product = require("../models/productModel");


const createOrder = async (req, res) => {

    try {

        const userId = req.user.userId;
        const { items, deliveryAddress } = req.body;

        const orderItems = [];

        let totalAmount = 0;


        for (const item of items) {

            const product = await Product.findById(item.product);


            orderItems.push({
                product: item.product,
                quantity: item.quantity,
                price: item.price
            });


            totalAmount += product.price * item.quantity;
        }


        const order = await Order.create({
            user: userId,
            items: orderItems,
            deliveryAddress,
            totalAmount
        });


        return res.status(201).json({
            success: true,
            message: "Order Placed successfully",
            order
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find();


        return res.status(200).json({
            success: true,
            orders
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



const updateOrderStatus = async (req, res) => {

    try {

        const { id } = req.params;
        const { status } = req.body;


        const order = await Order.findByIdAndUpdate(
            id,
            {
                status
            },
            {
                returnDocument: "after",
                runValidators: true
            }
        );


        if (!order) {

            return res.status(404).json({
                success: false,
                message: "Order not found"
            });

        }


        return res.status(200).json({
            success: true,
            message: "Order status updated successfully",
            order
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



module.exports = {
    createOrder,
    getAllOrders,
    updateOrderStatus
};