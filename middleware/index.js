import jwt from 'jsonwebtoken';
import db from '../model/index.js'

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    jwt.verify(authHeader, "test", async (err, response) => {
        const user = await db.users.findOne({ where: { email: response.email } })
        if (!(user || err)) res.status(401).json({ message: "Unauthorized" })
        req.userId = user.id;
        next()
    })
}

export default auth;