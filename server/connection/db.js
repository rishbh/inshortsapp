import mongoose from 'mongoose';

const Connection= async()=>{
    try{
       const url=`mongodb+srv://username:password@inshortsapp.lze2z.mongodb.net/inshortsappdb?retryWrites=true&w=majority`;


      await mongoose.connect(url, { useNewUrlParser: true })
      console.log('Database connecting successfully');

    }catch(error){
        console.log('Error while connecting with database',error);

    }


    }


export default Connection;