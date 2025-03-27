import multer, { diskStorage } from "multer";

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const fileFilter = (req,file,cb) => {
    const flag = file.cb(null,false);
}

export const upload = multer({
    storage,
    fileFilter
})

export default upload;