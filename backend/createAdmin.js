const mongoose=require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/userModel')
const bcrypt = require('bcrypt')

dotenv.config()

const createAdmin = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB Connected')

        const existingAdmin =await User.findOne({email:"admin@gmail.com"})

        if(existingAdmin){
            console.log("Admin already exists");
            await mongoose.connection.close()
            return;
        }

        const hashedPassword = await bcrypt.hash("admin@22",10);

       const admin = await User.create({
            name : "Admin",
            email : "admin@gmail.com",
            password : hashedPassword,
            role:"admin"
        });

        console.log("Admin created successfully");
        
        await mongoose.connection.close()
        
    } catch (error) {
        console.log("Error:",error.message);
        await mongoose.connection.close();
    }
}

createAdmin()