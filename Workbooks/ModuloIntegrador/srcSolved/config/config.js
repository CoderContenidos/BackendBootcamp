import dotenv from 'dotenv';

dotenv.config();

export default {
    mongo:{
        URL:process.env.MONGO_URL,
    },
    jwt:{
        COOKIE:process.env.JWT_COOKIE,
        SECRET: process.env.JWT_SECRET
    },
    app:{
        SUPERADMIN_EMAIL: process.env.SUPERADMIN_EMAIL,
        SUPERADMIN_PASSWORD: process.env.SUPERADMIN_PASSWORD
    }
}