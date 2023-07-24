import multer from "multer";
import __dirname from "../utils.js";

const storage = multer.diskStorage({
    destination:function(req,file,callback){
        if(file.fieldname==="contract"){
            return callback(null,`${__dirname}/docs/contracts`)
        }else if(file.fieldname==="dni"){
            return callback(null, `${__dirname}/docs/dnis`)
        }
    },
    filename:function(req,file,callback){
        return callback(null,`${Date.now()}-${file.originalname}`);
    }
})

const uploader = multer({storage});

export default uploader;