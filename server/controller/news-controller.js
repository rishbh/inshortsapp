
import News from '../modal/news.js';
export const getNews = async (request,response) => {
     try{
          const size=Number(request.query.size);
          const skip=Number(request.query.page);
              console.log(size,skip);
            const data=await News.find({}).limit(size).skip(size * skip);//for finding  objects --a mongodb function and skip
            //for page=0 skip=0docs 
            //for page=1 skip=5 *1 as count is always 5
     
           response.status(200).json(data);//giving data 

        }catch(error){
         response.status(500).json(error);
     }
}