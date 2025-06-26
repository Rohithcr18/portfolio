import mongoose from 'mongoose';
const LINK = process.env.MONGOLINK;

const connetDB = async () => {
    try {
        await mongoose.connect(LINK);
        console.log("successfully connected");
    } catch (err) {
        console.log(err);
    }
};

export default connetDB;