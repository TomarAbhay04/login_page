import mongoose  from "mongoose";

export async function connect () {
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("mongodb connected successfully");
        });

        connection.on('error', (error) => {
            console.log('MongoDB connection error. Please make sure mongodb is running ', error);
            process.exit();
        });

    }catch(error) {
        console.log("Something goes wrong");
        console.log(error);
    }
}