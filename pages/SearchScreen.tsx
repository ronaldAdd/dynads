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
} from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import ApiFB from '../Api/ApiFacebook';
import ApiGoogle from '../Api/ApiGoogle'
import { addDoc, collection,getDocs,where,query } from "firebase/firestore"; 
import { db } from '../firebase-config'

type UserProp = {
  imageUrl?: object;
  name?: string;
  status?: string;
  role?: string;
};

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
const search = async () =>{
  
  const col = collection(db, "token");
  const q = query(col, where("id", "==", '1'));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot)
  let array=[];
  querySnapshot.forEach((doc) => {
    array.push(doc.data())
  });
    const result =  await ApiFB.get(`/search?type=adinterest&q=[${text}]&limit=10000&locale=${Countrytext}&access_token=${array[0].fb}`);
    // profiles.push(result.data.data)
    if(result.data.data){
    const newTodos = [ItemFeeds.slice()]
    newTodos.push(result.data.data)
    setItemFeeds(newTodos)
  }
    }

    useEffect(() => {
      console.log(ItemFeeds)
  });    



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
                  uri: 'https://www.techfor.id/wp-content/uploads/2019/12/5-ways-to-promote.png',
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
                    INSIGHT
                  </Text>
                  <Text color="coolGray.200">Created by DYNAMO HOUSE</Text>
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
                <Input placeholder="Country like ID,US,etc...." onChangeText={(text) => setCountryText(text)} onSubmitEditing={() => search()} />
                
              </HStack>
              <VStack
                px="8"
                space="4"
                my="4"
                _light={{ bg: 'white' }}
                _dark={{ bg: 'coolGray.900' }}
              >

    {ItemFeeds.map((item, index) => {
        return (
            item.map((itemCollection,index2)=>{
                return(
                  <>
                    <Pressable>
                  <HStack alignItems="center" space="4">
                    <Center bg="primary.900" p="2" rounded="full">
                      <Icon
                        as={AntDesign}
                        name="adduser"
                        color="coolGray.50"
                        size="sm"
                      />
                    </Center>
                    <VStack>
                    <Text
                    key={itemCollection.id} index={index2}
                      fontWeight="medium"
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                    >
                      {itemCollection.name}
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize="xs"
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.200' }}
                      >
                      {itemCollection.topic}
                    </Text> 
                    <Text
                      fontWeight="medium"
                      fontSize="xs"
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.200' }}
                      >
                      Lower : {itemCollection.audience_size_lower_bound}
                    </Text> 
                    <Text
                      fontWeight="medium"
                      fontSize="xs"
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.200' }}
                      >
                     Upper : {itemCollection.audience_size_upper_bound}
                    </Text> 

                    </VStack>                   
                  </HStack>
                </Pressable>
                <Divider />
                  </>
                    
                )
            })
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