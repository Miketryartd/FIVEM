import express, { Request, Response } from "express";
import type { UserProps } from "../API/interface.js";
import UserSchema from "../ZodModels/Zod_Users.js";
import mongoose from 'mongoose';
import Users from "../Models/Users.js"; 
import jwt from 'jsonwebtoken';
const router = express.Router();
const jwt_token = process.env.JWT_TOKEN;

export const userRegister = async (
  req: Request<{}, {}, UserProps>,
  res: Response
) => {
  try {
    if (!jwt_token) return res.status(500).json({error: "JWT TOKEN MISSING"});
    const parsed = UserSchema.safeParse(req.body);

    if (!parsed.success) return res.status(400).json({errors: parsed.error.issues});

    const { firstName, lastName, middleName, suffix, email, contact, address, password } = parsed.data;
    if (!firstName ||  !middleName || !lastName || !email || !contact || !address || !password) return res.status(401).json({error: "Missing user data"}); 
    const fullName = `${firstName} ${middleName} ${lastName} ${suffix? "" + suffix : ""}`;
    const payload = {
        role: 'user',
        username: fullName,
        email: email,
        contact: contact,
        address: address,
       
    }

    const token = jwt.sign(payload, jwt_token, {
        expiresIn: '1d'

    });

    const newUser = new Users({
        firstName,
        middleName,
        lastName,
        suffix,
        email,
        contact,
        address,
        password,
    });

    await newUser.save();

    res.status(200).json({
        message: 'Registration succesful',
        token: token
    });


  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default router;