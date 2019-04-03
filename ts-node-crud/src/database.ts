import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect('mongodb://172.17.0.2:27017/appcrud',{
            useNewUrlParser: true
        });
        console.log('>>> Database conected...')
    } catch (error) {
        console.error(error);
    }
}