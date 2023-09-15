import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    jwt.verify(authHeader, "test", (err) => {
        if (err) res.status(401).json({message: "Unauthorized"})
        next()
    })
}

export default auth;