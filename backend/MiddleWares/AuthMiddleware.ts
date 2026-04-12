import express, { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
const router = express.Router();


export const verifyAuth = async (req: Request, res: Response, next: NextFunction) => {

    try{
        const jwt_token = process.env.JWT_TOKEN;
        if (!jwt_token) return res.status(404).json({error: "jwt secret missing"});
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({error: "No token provided", success: false});
        const token = authHeader.split(" ")[1];
        if (!token) return res.status(404).json({success: false, message: "missing token"});
        const decoded = jwt.verify(token, jwt_token as string);
        (req as any).user = decoded;

        next();
    } catch (error){
        console.error("Error token unavailable", error);
        return res.status(500).json({error: "Server error"});
    }
}




export default router;



