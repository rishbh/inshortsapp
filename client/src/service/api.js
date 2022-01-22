//all api to give data to ui
import axios from 'axios';
import React from 'react';
//import { getNews } from '../../../server/controller/news-controller';

export const getNews = async (page,size=5)=>{

  const url="http://localhost:8000";
     try{
          return await axios.get(`${url}/news?page=${page}&size=${size}`); //get api
        }catch(error){

              console.log("Error while calling news",error);
            }
}
