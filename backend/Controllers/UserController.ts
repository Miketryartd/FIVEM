import express, { Request, Response } from "express";
import type { UserProps } from "../Types/interface.js";
import UserSchema from "../ZodModels/Zod_Users.js";
import LoginSchema from "../ZodModels/Zod_Login.js";
import mongoose from 'mongoose';
import Users from "../Models/Users.js"; 
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const router = express.Router();


export const userRegister = async (
  req: Request<{}, {}, UserProps>,
  res: Response
) => {
  try {
    const jwt_token = process.env.JWT_TOKEN;


    if (!jwt_token) return res.status(500).json({error: "JWT TOKEN MISSING"});
    const parsed = UserSchema.safeParse(req.body);

    if (!parsed.success) return res.status(400).json({errors: parsed.error.issues});

    const { firstName, lastName, middleName, suffix, birthdate, email, contact, address, password } = parsed.data;
   if (!parsed.data) return res.status(401).json({error: "Missing input"});
    const fullName = `${firstName} ${middleName} ${lastName} ${suffix? "" + suffix : ""}`;
    const payload = {
        role: 'user',
        username: fullName,
        email: email,
        contact: contact,
        address: address,
       
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const token = jwt.sign(payload, jwt_token, {
        expiresIn: '1d'

    });

    const newUser = new Users({
        firstName,
        middleName,
        lastName,
        suffix,
        birthdate,
        email,
        contact,
        address,
        password: hashedPassword,
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



export const userLogin = async (req: Request , res: Response)  => {
          try{
            const parsed = LoginSchema.safeParse(req.body);
            if (!parsed.success) return res.status(400).json({error: "Missing incredentials"});

            const {email, password} = parsed.data;
            if (!parsed.data) return res.status(401).json({error: "Missing input"});

            const user = await Users.findOne({email});
            if (!user) return res.status(404).json({error: "User not found"});

          const comparePassword = await bcrypt.compare(password, user.password);
          if (!comparePassword) return res.status(401).json({error: "Invalid credentials"});

          const jwt_token = process.env.JWT_TOKEN;


          if (!jwt_token) return res.status(500).json({error: "JWT TOKEN MISSING"});

          const token = jwt.sign({
            id: user._id,
            email: user.email,
          },
        jwt_token,
      {expiresIn: "1d"});

      res.json({
        success: true,
        token,
        message: "Welcome!"
      });


          } catch (error){
            console.error('Error logging in user');
            res.status(500).json({error: "Server error"});
          }
}

export default router;