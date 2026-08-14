const express=require('express')
const dotenv=require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')

dotenv.config()

connectDB()

const app=express()

app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("uploads"));

app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})