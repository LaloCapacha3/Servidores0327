import { Request, Response } from "express";
import { existsSync } from 'fs';
import path from "path";

export function downloadFile(req:Request, res:Response) {
    const fileName = req.query.file;

    if (!fileName) {
        res.sendStatus(404);
        return;
    }

    const filePath = path.join(__dirname,'..','..','src','uploads',(fileName as string));
    
    if (existsSync(filePath)) {
        res.sendFile(filePath)
    } else {
        res.sendStatus(404)
    }
}

export function uploadFile (req:Request, res:Response) {
    res.send(200);
    console.log(req.file);
}