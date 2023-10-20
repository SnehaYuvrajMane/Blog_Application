
import mongoose from 'mongoose';
import dotenv from 'dotenv';



dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


 const Connection= async (username,password)=>{
 const URL = `mongodb+srv://${username}:${password}@cluster0.c6lum2e.mongodb.net/Blog-app`
// const URL = `mongodb://127.0.0.1:27017/Blog-app`
 console.log(URL);

    try{

       await  mongoose.connect(URL,{ 
        
        
        useNewUrlParser :true,
        useUnifiedTopology:true
    });
          console.log("database connected sucessfully")
    }catch(error){
        console.log(error)

    }

}





export default Connection;