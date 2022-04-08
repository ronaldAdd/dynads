import React from 'react'
import axios from 'axios'
const baseUrl = 'https://graph.facebook.com';
import { create } from "apisauce";


// https://developers.facebook.com/docs/graph-api/reference/v13.0/user/likes
// https://developers.facebook.com/docs/permissions/reference/read_insights
// https://developers.facebook.com/docs/graph-api/reference/page/insights
// https://web.facebook.com/search/pages/?q=adidas&_rdc=1&_rdr
//https://graph.facebook.com/search?type=adinterestsuggestion&interest_list=[“Golf”]&limit=1000&locale=en_US&access_token=your-access-token
// https://github.com/amaltariq/CS144-ClickManiac/blob/master/adsetTest.py
//https://search.r-project.org/CRAN/refmans/fbRads/html/fbad_get_search.html


// fbad_get_search(fbacc, q, type = c("adeducationschool", "adeducationmajor",
//   "adgeolocation", "adcountry", "adzipcode", "adgeolocationmeta",
//   "adradiussuggestion", "adinterest", "adinterestsuggestion", "adinterestvalid",
//   "adlocale", "adTargetingCategory", "adworkemployer"), ...)


//oauth/access_token?client_id=1162699157801723&client_secret=32ca2e3d6f68f25ef4509f6737f9e448&grant_type=client_credentials

// {
//     "access_token": "1162699157801723|p6bV__p_xpdPYDG3XAr1jNDkbm8",
//     "token_type": "bearer"
//   }

// const ApiFacebook = () => {
//     axios({
//         method: 'get',
//         url: `${baseUrl}/search?type=adinterest&q=[Golf]&limit=10000&locale=en_US&access_token=EAAQhdZC5ICvsBAHeB7KUz5jbJHBd1TYLCjz8pcRc6luRbpzFvs84ya9fS9QBHlq44FSfIkflqSSwAbi0NxVOwgzJaDyJoQNPn2r1k0TZAmKjv9LVDZBJQQx4frM7qmvzTUNLMjjDDK0ZBZB3hzWqHFK12YUszkvsrauXDK9VtX6c0mgYL6lR8CXoDzttguaExryYjcejbHkCFRiPLUaMELWqerJ7sKp0ZD`,
//       }).then((response) => {
//         console.log(response.data);
//       });    
// }

const ApiFacebook=create({
    baseURL: `${baseUrl}`
    
});

export default ApiFacebook