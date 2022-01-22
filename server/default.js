import News from './modal/news.js';
import {data} from './constants/data.js';

const defaultData= async ()=>{

    try{
        await News.deleteMany({});
       await News.insertMany(data);
     console.log("Data imported successfully");

    }catch(error){
        console.log("Error",error.message);
    }
    
    }

    export default defaultData;