import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  ScrollView,
  Pressable,
  Center,
  Divider,
  Button,
  Stack,
  Link,
} from 'native-base';
import type { ImageSourcePropType } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import DashboardLayout from '../layouts/DashboardLayout';
import { ResponsiveValue } from '../types';

type Category = {
    category: string;
  };
  
  type Review = {
    image: ImageSourcePropType;
    name: string;
    time: string;
    review: string;
  };
  
  const categories: Category[] = [
    {
      category: 'New Born',
    },
    {
      category: 'Tiny Baby',
    },
    {
      category: '0-3 M',
    },
  ];


  const reviews: Review[] = [
    {
      image: require('../assets/handsome.jpg'),
      name: 'Laura Jones',
      time: '12 May 2021',
      review:
        'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
    },
    {
      image: require('../assets/smiling.jpg'),
      name: 'Laura Jones',
      time: '02 Jan 2021',
      review:
        'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
    },
    {
      image: require('../assets/young-girl.jpg'),
      name: 'Rati Agarwal',
      time: '31 Aug 2021',
      review:
        'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
    },
  ];


type AddToCartButtonProps = {
  display: ResponsiveValue<string>;
};


const AddToCartButton = (props: AddToCartButtonProps) => {
    return (
      <HStack mt="5" space="4" alignItems="center" display={props.display}>
        <Pressable
          onPress={() => {
            console.log('hello');
          }}
        >
          <Center
            p="2"
            borderRadius="4"
            _light={{ bg: 'primary.50' }}
            _dark={{ bg: { base: 'customGray', md: 'coolGray.800' } }}
          >
            <Icon
              size="8"
              name="heart"
              as={EvilIcons}
              _dark={{ color: 'primary.500' }}
              _light={{ color: 'primary.900' }}
            />
          </Center>
        </Pressable>
  
        <Button
          flex={1}
          h="100%"
          py={3}
          borderRadius="4"
          _dark={{ bg: 'violet.700', _pressed: { bg: 'primary.500' } }}
          _light={{ bg: 'primary.900' }}
          _text={{ fontSize: 'md', fontWeight: 'medium' }}
          onPress={() => {
            console.log('hello');
          }}
        >
          Add to Cart
        </Button>
      </HStack>
    );
  };

  function Categorys() {
    return (
      <>
        <Button.Group space="2" mt={3} alignItems="center">
          {categories.map((item, index) => {
            return (
              <Button
                key={index}
                py="4"
                px="5"
                borderRadius="4"
                variant="subtle"
                _text={{
                  _dark: { color: 'coolGray.50' },
                  _light: { color: 'coolGray.800' },
                  fontWeight: 'normal',
                }}
                _light={{ colorScheme: 'primary' }}
                _dark={{
                  bg: { base: 'customGray', md: 'coolGray.800' },
                }}
              >
                {item.category}
              </Button>
            );
          })}
        </Button.Group>
      </>
    );
  }


  function ProductInfo() {
    return (
      <>
        <VStack space={1}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={{ md: 4 }}
          >
            <Text
              fontSize="lg"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontWeight="medium"
            >
              Body Suit
            </Text>
            <HStack alignItems="center" space="1">
              <Icon size="4" name={'star'} as={AntDesign} color="amber.400" />
              <Text
                fontSize="md"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                4.9
              </Text>
              <Text
                fontSize="sm"
                fontWeight="medium"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
              >
                (120)
              </Text>
            </HStack>
          </HStack>
          <Text fontSize="sm" fontWeight="medium" color="coolGray.400">
            Mother care
          </Text>
          <Text
            fontSize="xl"
            fontWeight="medium"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            ₹500
          </Text>
        </VStack>
        <HStack mt="5" alignItems="center">
          <Text
            fontSize="sm"
            fontWeight="medium"
            _dark={{ color: 'coolGray.50' }}
            _light={{ color: 'coolGray.800' }}
          >
            Select Size
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="coolGray.400">
            (Age Group)
          </Text>
          <Link
            ml="auto"
            _text={{ textDecoration: 'none' }}
            _light={{
              _text: {
                color: 'primary.800',
                fontSize: 'sm',
                fontWeight: 'medium',
              },
            }}
            _dark={{
              _text: {
                color: 'primary.400',
                fontSize: 'sm',
                fontWeight: 'medium',
              },
            }}
          >
            Size Chart
          </Link>
        </HStack>
      </>
    );
  }


  function Reviews() {
    const [tabName, setTabName] = React.useState('Reviews');
    return (
      <>
        <HStack mt="8" space="5">
          <Pressable
            onPress={() => {
              setTabName('Description');
            }}
          >
            <Text
              fontSize="16"
              fontWeight="medium"
              letterSpacing="0.4"
              _light={{
                color: tabName === 'Description' ? 'primary.900' : 'coolGray.400',
              }}
              _dark={{
                color: tabName === 'Description' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Description
            </Text>
            {tabName === 'Description' ? (
              <Box width="100%">
                <Divider
                  py="0.5"
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'primary.700' }}
                />
              </Box>
            ) : (
              <></>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              setTabName('Reviews');
            }}
          >
            <Text
              fontSize="16"
              fontWeight="medium"
              letterSpacing="0.4"
              _light={{
                color: tabName === 'Reviews' ? 'primary.900' : 'coolGray.400',
              }}
              _dark={{
                color: tabName === 'Reviews' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Reviews
            </Text>
            {tabName === 'Reviews' ? (
              <Box width="100%">
                <Divider
                  py="0.5"
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'primary.700' }}
                />
              </Box>
            ) : (
              <></>
            )}
          </Pressable>
        </HStack>
        {tabName === 'Description' ? (
          <Text
            mt="3"
            fontSize="sm"
            lineHeight="lg"
            fontWeight="medium"
            letterSpacing="0.3"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            Yellow bodysuit, has a round neck with envelope detail along the
            shoulder, short sleeves and snap button closures along the crotch.Your
            Body suit has a round neck with detail along the shoulder,short
            sleeves and snap button closer along the front.
          </Text>
        ) : (
          reviews.map((item, index) => {
            return (
              <VStack my="3" px="4" key={index}>
                <HStack justifyContent="space-between">
                  <HStack space="3">
                    <Avatar source={item.image} height="9" width="9" />
                    <VStack space="1">
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        _dark={{ color: 'coolGray.50' }}
                        _light={{ color: 'coolGray.800' }}
                      >
                        {item.name}
                      </Text>
                      <HStack space="1">
                        <Icon
                          size="4"
                          name="star"
                          as={AntDesign}
                          color="amber.400"
                        />
                      </HStack>
                    </VStack>
                  </HStack>
                  <Text
                    fontSize="sm"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.300' }}
                  >
                    {item.time}
                  </Text>
                </HStack>
                <Text
                  alignItems="center"
                  lineHeight="lg"
                  mt="4"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.300' }}
                  fontSize="md"
                >
                  {item.review}
                </Text>
              </VStack>
            );
          })
        )}
      </>
    );
  }
  
  



function DetailsScreen({route}) {
//   return (
//     <div>DetailsScreen {route.params.id}</div>
    
//   )
return (
      <Stack
        p={{ md: '8' }}
        flex={1}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        borderWidth={1}
        borderColor="#E5E7EB"
        direction={{ base: 'column', md: 'row' }}
        space="6"
      >
        <Box
          p="2"
          _light={{ bg: 'primary.50' }}
          _dark={{ bg: 'customGray' }}
          borderRadius="md"
          alignItems="center"
          w={{ md: '50%' }}
          h={{ base: '40%', md: 'auto' }}
          pr={{ base: '2', md: '4' }}
          mx={{ base: 4 }}
          justifyContent="center"
          mt={{ base: 4 }}
        >
          <Image
            width="full"
            height={{ base: 'full', md: 'full' }}
            rounded={{ base: 'none', md: 'lg' }}
            alt="Alternate Text"
            source={require('../pages/components4/baby-clothes.jpg')}
          />
        </Box>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box flex={1} px={{ base: 4 }} pb={{ base: 4 }}>
            <ProductInfo />
            <Categorys />
            <AddToCartButton display={{ base: 'none', md: 'flex' }} />
            <Reviews />
            <AddToCartButton display={{ base: 'flex', md: 'none' }} />
          </Box>
        </ScrollView>
      </Stack>
  );
}

export default DetailsScreen