import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv"
dotenv.config()

const connectDb = async() => {
   try{
     const connectioni = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(connectioni.connection.host);
     console.log(connectioni.connection.port);
     console.log(connectioni.connection.name);
     
   }
   catch (error){
    console.log("ther are some issue face your db.js" ,error);
    
   } 
};

export default connectDb;

