import { __dirname } from "../path";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, __dirname + '/public/images')
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9)
        cb(null, fieldname + '-' + uniqueSuffix)
    }
})

export const uploader = multer({storage})