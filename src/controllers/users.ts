import { Request, Response } from "express";
import userModel from "../models/user";
export async function getAll(req:Request, res:Response) {
    try{
        const users = await userModel.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send();
    }
}
