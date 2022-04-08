import React from 'react'
import axios from 'axios'
const baseUrl = 'https://real-time-google-search.p.rapidapi.com/search?';
import { create } from "apisauce";

// https://rapidapi.com/datascraper/api/real-time-google-search/

// const options = {
//     method: 'GET',
//     url: 'https://real-time-google-search.p.rapidapi.com/search',
//     params: {
//       q: 'rumah dijual',
//       location_name: 'indonesia',
//       location_parameters_auto: 'true',
//       num: '10',
//       google_domain: 'facebook'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'real-time-google-search.p.rapidapi.com',
//       'X-RapidAPI-Key': '93ec548595msh8e4723291cbf030p198755jsn4ded06788b51'
//     }
//   };

const ApiGoogle=create({
    baseURL: `${baseUrl}`
    
});

export default ApiGoogle