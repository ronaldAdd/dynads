import React, {useState, useEffect} from 'react'
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  Pressable,
  Switch,
  Center,
  Badge,
  Modal,
  Button,
  Divider,
  ScrollView,
  Input,
  Spinner,
} from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import ApiGoogle from '../Api/ApiGoogle'
import { addDoc, collection,getDocs,where,query,startAt,endAt,orderBy } from "firebase/firestore"; 
import { db } from '../firebase-config'
import axios from 'axios';

type UserProp = {
  imageUrl?: object;
  name?: string;
  status?: string;
  role?: string;
};

const dummy1=[
  {
    "status": 200,
    "data": {
      "result_stat": "Sekitar 197.000.000 hasil (0,55 detik)",
      "organic_results": [],
      "related_questions": [],
      "image_results": [],
      "image_filters": [],
      "video_results": [],
      "inline_products": [],
      "inline_cards": [],
      "inline_twitter": [],
      "knowledge_graph": {
        "informations": [],
        "answer_panel": []
      },
      "section_with_header": {
        "section_list": []
      },
      "navigation": {
        "current_page": "1",
        "other_pages": [
          {
            "page": "2",
            "url": "https://www.google.co.id/search?q=rumah+dijual&gl=ID&hl=id&ei=bCpPYrOUFoPFkPIPr7OEyAs&start=10&sa=N&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ8tMDegQIARA8"
          },
          {
            "page": "3",
            "url": "https://www.google.co.id/search?q=rumah+dijual&gl=ID&hl=id&ei=bCpPYrOUFoPFkPIPr7OEyAs&start=20&sa=N&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ8tMDegQIARA-"
          },
          {
            "page": "4",
            "url": "https://www.google.co.id/search?q=rumah+dijual&gl=ID&hl=id&ei=bCpPYrOUFoPFkPIPr7OEyAs&start=30&sa=N&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ8tMDegQIARBA"
          },
          {
            "page": "5",
            "url": "https://www.google.co.id/search?q=rumah+dijual&gl=ID&hl=id&ei=bCpPYrOUFoPFkPIPr7OEyAs&start=40&sa=N&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ8tMDegQIARBC"
          },
          {
            "page": "Berikutnya",
            "url": "https://www.google.co.id/search?q=rumah+dijual&gl=ID&hl=id&ei=bCpPYrOUFoPFkPIPr7OEyAs&start=10&sa=N&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ8NMDegQIARBE"
          }
        ]
      },
      "top_section": {
        "featured_snippet": {},
        "answer_box": {}
      },
      "query": {
        "auto_correction": {},
        "related_search": [
          {
            "query": "rumah dijual cepat",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Rumah+Dijual+CEPAT&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAggEAE"
          },
          {
            "query": "rumah dijual hari ini",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Rumah+Dijual+Hari+ini&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAgkEAE"
          },
          {
            "query": "rumah dijual olx",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Rumah+Dijual+OLX&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAgiEAE"
          },
          {
            "query": "rumah dijual di sekitar sini",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Rumah+Dijual+di+sekitar+sini&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAglEAE"
          },
          {
            "query": "rumah dijual murah",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Rumah+Dijual+murah&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAgjEAE"
          },
          {
            "query": "desain rumah dijual",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Desain+rumah+Dijual&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAghEAE"
          },
          {
            "query": "rumah dijual di banten",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Rumah+Dijual+di+Banten&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAgfEAE"
          },
          {
            "query": "rumah dijual jakarta",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Rumah+Dijual+Jakarta&sa=X&ved=2ahUKEwiz-s_Ix4L3AhWDIkQIHa8ZAbkQ1QJ6BAgdEAE"
          }
        ]
      },
      "local_results": {
        "map": {},
        "places": [],
        "hotels": []
      },
      "ads": {
        "top_text_ads": [],
        "bottom_text_ads": [],
        "product_ads": [],
        "sidebar_product_ads": []
      },
      "search_parameters": {
        "gl": "ID",
        "hl": "id",
        "num": "10",
        "google_domain": "google.co.id",
        "auto_location": {
          "location_name": "Riau,Indonesia",
          "location_type": "Province",
          "country_code": "ID",
          "country_name": "Indonesia"
        }
      }
    }
  }
]


const dummy=[
  {
    "status": 200,
    "data": {
      "result_stat": "Sekitar 6.450.000 hasil (0,44 detik)",
      "organic_results": [
        {
          "title": "Importir.org",
          "url": "https://importir.org/",
          "breadcrumb": "https://importir.org",
          "desc": "IMPORTIR .ORG adalah wadah / platform yang membantu membernya dalam proses export-import. Bukan sekedar membantu para importir yang sudah ahli, importir .org ..."
        }
      ],
      "related_questions": [],
      "image_results": [],
      "image_filters": [],
      "video_results": [],
      "inline_products": [],
      "inline_cards": [],
      "inline_twitter": [],
      "knowledge_graph": {
        "informations": [],
        "answer_panel": []
      },
      "section_with_header": {
        "section_list": []
      },
      "navigation": {
        "current_page": "1",
        "other_pages": [
          {
            "page": "2",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=10&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhA-"
          },
          {
            "page": "3",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=20&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBA"
          },
          {
            "page": "4",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=30&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBC"
          },
          {
            "page": "5",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=40&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBE"
          },
          {
            "page": "6",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=50&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBG"
          },
          {
            "page": "7",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=60&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBI"
          },
          {
            "page": "8",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=70&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBK"
          },
          {
            "page": "9",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=80&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBM"
          },
          {
            "page": "10",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=90&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8tMDegQIAhBO"
          },
          {
            "page": "Berikutnya",
            "url": "https://www.google.co.id/search?q=importir&gl=ID&hl=id&ei=Gu9OYvmMK4m1tAaO06ewCg&start=10&sa=N&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ8NMDegQIAhBQ"
          }
        ]
      },
      "top_section": {
        "featured_snippet": {},
        "answer_box": {}
      },
      "query": {
        "auto_correction": {},
        "related_search": [
          {
            "query": "importir.org penipu",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=importir.org+penipu&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAhIEAE"
          },
          {
            "query": "importir terpercaya",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Importir+terpercaya&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAhKEAE"
          },
          {
            "query": "daftar importir",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Daftar+Importir&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAhLEAE"
          },
          {
            "query": "importir.id apakah aman",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=importir.id+apakah+aman&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAhJEAE"
          },
          {
            "query": "importir.id adalah",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=importir.id+adalah&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAhGEAE"
          },
          {
            "query": "importir.org indonesia",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=importir.org+indonesia&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAg_EAE"
          },
          {
            "query": "importir barang china",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Importir+Barang+China&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAg5EAE"
          },
          {
            "query": "mitra importir",
            "url": "https://www.google.co.id/search?gl=ID&hl=id&q=Mitra+Importir&sa=X&ved=2ahUKEwj5gcX_joL3AhWJGs0KHY7pCaYQ1QJ6BAg1EAE"
          }
        ]
      },
      "local_results": {
        "map": {},
        "places": [],
        "hotels": []
      },
      "ads": {
        "top_text_ads": [
          {
            "title": "Jual Barang Impor Profit Besar - Cara Mudah Menjadi Importir",
            "url": "https://www.google.co.id/aclk?sa=l&ai=DChcSEwi5l8v_joL3AhXufG8EHdvsCYAYABAAGgJqZg&ae=2&sig=AOD64_2GfHbUVeKBTWPIS5X3PUSwAHEwGQ&adurl=&q="
          }
        ],
        "bottom_text_ads": [],
        "product_ads": [],
        "sidebar_product_ads": []
      },
      "search_parameters": {
        "gl": "ID",
        "hl": "id",
        "num": "10",
        "google_domain": "google.co.id",
        "auto_location": {
          "location_name": "Jambi,Indonesia",
          "location_type": "Province",
          "country_code": "ID",
          "country_name": "Indonesia"
        }
      }
    }
  }  
]

const userList: UserProp[] = [
  {
    imageUrl: require('../assets/handsome.jpg'),
    name: 'Abhilash',
    status: 'Available',
    role: 'Admin',
  },
  {
    imageUrl: require('../assets/women.jpg'),
    name: 'Kattie',
    status: 'Live High',
  },
  {
    imageUrl: require('../assets/young-girl.jpg'),
    name: 'Kattie',
    status: 'Live High',
  },
  {
    imageUrl: require('../assets/thinking-girl.jpg'),
    name: 'Kattie',
    status: 'Live High',
  },
  {
    imageUrl: require('../assets/nice-girl.jpg'),
    name: 'Swapna',
  },
  {
    imageUrl: require('../assets/man.jpg'),
    name: 'John Lli',
    status: 'Available over a call',
  },
  {
    imageUrl: require('../assets/thinking-girl.jpg'),
    name: 'Mary J',
    status: 'Make it happen',
  },
  {
    imageUrl: require('../assets/handsome.jpg'),
    name: 'Swapna',
    status: 'Make it happen',
  },
  {
    imageUrl: require('../assets/confident-man.jpg'),
    name: 'Mary J',
  },
  {
    imageUrl: require('../assets/handsome.jpg'),
    name: 'Mary J',
  },
  {
    imageUrl: require('../assets/eclipse1.jpeg'),
    name: 'Sankalp',
  },
];
const userListTemplate = (user: UserProp, displayDivider: boolean) => {
  return (
    <>
      <HStack justifyContent="space-between" mb="2">
        <HStack space="2" alignItems="center">
          <Avatar source={user.imageUrl} />
          <VStack>
            <Text
              fontWeight="medium"
              fontSize="md"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              {user.name}
            </Text>
            <Text
              fontWeight="medium"
              fontSize="xs"
              _light={{ color: 'coolGray.400' }}
              _dark={{ color: 'coolGray.200' }}
            >
              {user.status}
            </Text>
          </VStack>
        </HStack>
        {user.role && (
          <Center>
            <Badge
              padding="1"
              borderRadius="4"
              _light={{
                _text: {
                  color: 'primary.900',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                },
                borderColor: 'primary.900',
                bg: 'primary.200',
              }}
              _dark={{
                _text: {
                  color: 'coolGray.50',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                },
                borderColor: 'coolGray.50',
                bg: 'coolGray.900',
              }}
            >
              {user.role}
            </Badge>
          </Center>
        )}
      </HStack>
      {displayDivider && <Divider />}
    </>
  );
};

function SearchScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
const [text, setText] = useState(''); 
const [Countrytext, setCountryText] = useState(''); 
const [ItemFeeds, setItemFeeds] = useState([]);
const [SpinnerLoad, setSpinnerLoad] = useState(false);
const [SearchQuery, setSearchQuery] = useState([]);

const search = async () =>{
  setSpinnerLoad(true)
setItemFeeds([])
  const col = collection(db, "adsgoogle");
  const q = query(col, orderBy('related_search'), startAt(text), endAt(text+'\uf8ff'));
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot)
  let array=[];
  querySnapshot.forEach((doc) => {
    array.push(doc.data())
  });
  setItemFeeds(array);
console.log(ItemFeeds.length,'length');
  const options = {
    method: 'GET',
    url: 'https://real-time-google-search.p.rapidapi.com/search',
    params: {location_name: Countrytext, q: text,location_parameters_auto:true,'num':10},
    headers: {
      'X-RapidAPI-Host': 'real-time-google-search.p.rapidapi.com',
      'X-RapidAPI-Key': '6cd2ea76b1msh56921eec85e14a2p18dc44jsn1f86368adbd4'
    }
  };

  if(ItemFeeds.length===0){
    console.log('masuk')
  const result =  await axios.request(options);
  console.log(result,'result')
    try {
          // // ================================================================
          // FIREBASE
          const docRef = addDoc(collection(db, "adsgoogle"), {
            id: "5",
            ads :JSON.parse(JSON.stringify(result.data)),
            related_search : text
          });
          console.log('saveds');
          // ================================================================
    } catch (error) {
          setSpinnerLoad(false);
          console.log(error.message)
    }
  }
  console.log('spinner false')
  setSpinnerLoad(false);
  // setSearchQuery(result);
  // console.log(SearchQuery);

  //search again
  const cols = collection(db, "adsgoogle");
  const qs = query(cols, orderBy('related_search'), startAt(text), endAt(text+'\uf8ff'));
  const querySnapshots = await getDocs(qs);
  console.log(querySnapshots)
  let arrays=[];
  querySnapshots.forEach((doc) => {
    arrays.push(doc.data())
  });
  setItemFeeds(arrays)
    }


  //   useEffect(() => {
  //     console.log(ItemFeeds)
  // });    



  return (
    <>
        <ScrollView>
          <VStack
            borderRadius={{ md: '8' }}
            _light={{
              borderColor: 'coolGray.200',
              bg: { base: 'white' },
            }}
            _dark={{
              borderColor: 'coolGray.800',
              bg: { md: 'coolGray.900', base: 'coolGray.800' },
            }}
            borderWidth={{ md: '1' }}
            borderBottomWidth="1"
            overflow="hidden"
          >
            <Box h="56" justifyContent="flex-end">
              <Image
                zIndex={-1}
                position="absolute"
                source={{
                  uri: 'https://ahrefs.com/blog/wp-content/uploads/2018/07/ahrefs-fb-google-keyword-planner-guide.png',
                }}
                alt="Alternate Text"
                top="0"
                right="0"
                left="0"
                bottom="0"
              />

              <HStack
                px="30"
                justifyContent="space-between"
                alignItems="center"
                bg="#22222299"
              >
                <VStack py="2">
                  <Text color="coolGray.50" fontWeight="bold" fontSize="md">
                  REALTIME SEARCH
                  </Text>
                  <Text color="coolGray.200">Results: organic, ads, inline image, inline videos, inline products,etc..</Text>
                </VStack>
              </HStack>
            </Box>

            <VStack _light={{ bg: 'white' }} _dark={{ bg: 'coolGray.900' }}>
              <HStack
                py="4"
                px="8"
                justifyContent="space-between"
                alignItems="center"
                _light={{ bg: 'coolGray.100' }}
                _dark={{ bg: 'coolGray.800' }}
              >
                <Input placeholder="Keyword/Advertiser/Domain" 
                onChangeText={(text) => setText(text)}
                onSubmitEditing={() => search()}
                />
                <Input placeholder="Country like indonesia,United state,etc...." onChangeText={(text) => setCountryText(text)} onSubmitEditing={() => search()} />
                
              </HStack>
              <VStack
                px="8"
                space="4"
                my="4"
                _light={{ bg: 'white' }}
                _dark={{ bg: 'coolGray.900' }}
              >
{SpinnerLoad?                
<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
:
<></>
}
    {ItemFeeds.map((item, index) => {
        return ([
              <div>{JSON.stringify(item.ads.data.ads)}</div>
        ]
            )
      })}                
              </VStack>
            </VStack>
          </VStack>
        </ScrollView>
    </>
  )
}

export default SearchScreen