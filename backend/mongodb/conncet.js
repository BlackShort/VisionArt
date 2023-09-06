import mongoose from 'mongoose';
const connectDb = (url) =>{
    mongoose.set('strictQuery', true);
    mongoose.connect(url).then(()=> console.log("Connected to MongoDB")).catch((err) =>{
        console.log("Failed to Conncet")
        console.error(err)
    })
}

export default connectDb;