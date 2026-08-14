const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1]
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        //store decoded user data
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
}

module.exports = authMiddleware