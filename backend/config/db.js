import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://pramitmandal:pramit123@cluster0.gkpag.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}