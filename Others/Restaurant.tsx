import React from 'react';
import {
  Text,
  VStack,
  Button,
  HStack,
  Stack,
  Image,
  Box,
  Icon,
  Switch,
  Divider,
  Pressable,
  Hidden,
  Center,
  ScrollView,
} from 'native-base';
import type { ImageSourcePropType } from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconDishVeg from './components/IconDishVeg';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

type DishList = {
  dishtype: string;
  dishName: string;
  dishCategory: string;
  dishAmount: string;
  buttonText: string;
};
type RatingStarts = {
  iconName: string;
};
type FoodImage = {
  storyImageUrl: ImageSourcePropType;
};
function HotelName() {
  const foodImage: FoodImage[] = [
    {
      storyImageUrl: require('../../assets/RestaurentThree.png'),
    },
  ];
  return (
    <VStack space={2}>
      <HStack
        mt={{ base: 2, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack px={{ base: 4, md: 0 }}>
          <Text
            fontSize="xl"
            fontWeight="medium"
            _light={{ color: 'coolGray.900' }}
            _dark={{ color: 'white' }}
          >
            Hotel Taj
          </Text>
          <Text
            mt={1}
            fontSize="md"
            fontWeight="medium"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'white' }}
          >
            North Indian,Mughlai Biryani
          </Text>
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'white' }}
          >
            Yestwanpur, Bangalore
          </Text>
        </Stack>
        <VStack space={1}>
          <Box
            py={1}
            _light={{ bg: '#079561' }}
            _dark={{ bg: '#079561' }}
            width={32}
            borderTopLeftRadius={{ base: 4, md: 0 }}
            borderBottomLeftRadius={{ base: 4, md: 0 }}
            px={{ base: 2, md: 0 }}
            ml={{ base: 1 }}
          >
            <VStack>
              <HStack alignItems="center" space={{ base: 2, md: 0 }}>
                <Text fontSize="sm" fontWeight="medium" color="white">
                  4.1
                </Text>
                <Icon
                  as={Ionicons}
                  name="star"
                  size="4"
                  _light={{ color: 'white' }}
                />
              </HStack>
              <Text fontSize="xs" fontWeight="medium" color="white">
                DELIVERY
              </Text>
            </VStack>
          </Box>
          <Box position="relative" w={130} h={60} mt={{ base: 2, md: 0 }}>
            {foodImage.map((item, index) => {
              return (
                <Image
                  key={index}
                  ml={1}
                  rounded="sm"
                  zIndex={-1}
                  position="absolute"
                  w={130}
                  h={60}
                  resizeMode="cover"
                  source={item.storyImageUrl}
                  alt={'Alternate Text '}
                />
              );
            })}
            <VStack left={3} top={4}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                _light={{ color: 'white' }}
                _dark={{ color: 'white' }}
              >
                5
              </Text>
              <Text
                fontSize="sm"
                fontWeight="bold"
                _light={{ color: 'white' }}
                _dark={{ color: 'white' }}
              >
                Photos
              </Text>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
}
function OptionSelector() {
  const [tabName, setTabName] = React.useState('Full Menu');
  return (
    <HStack
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      mt={{ base: 4 }}
      px={{ base: 2, md: 4 }}
    >
      <Pressable
        px="2"
        onPress={() => {
          setTabName('Full Menu');
        }}
        maxW="30%"
      >
        <Text
          fontSize="lg"
          fontWeight="medium"
          _light={{
            color: tabName === 'Full Menu' ? 'primary.900' : 'coolGray.400',
          }}
          _dark={{
            color: tabName === 'Full Menu' ? 'primary.400' : 'coolGray.400',
          }}
        >
          Full Menu
        </Text>
        <Box>
          <Divider
            borderRadius="4"
            py="0.5"
            _light={{
              bg: {
                base: tabName === 'Full Menu' ? 'primary.900' : 'primary.900',
                md: tabName === 'Full Menu' ? 'primary.900' : 'white',
              },
            }}
            _dark={{
              bgColor: {
                base: tabName === 'Full Menu' ? 'primary.400' : 'coolGray.900',
              },
            }}
          />
        </Box>
      </Pressable>

      <HStack alignItems="center" space={{ base: 0, md: 4 }}>
        <HStack alignItems="center">
          <Text
            fontSize="sm"
            fontWeight="medium"
            _light={{ color: 'coolGray.900' }}
            _dark={{ color: 'coolGray.300' }}
          >
            Veg
          </Text>
          <Switch
            size="sm"
            // @ts-ignore
            _light={{
              onThumbColor: 'green.600',
              offThumbColor: 'green.600',
              offTrackColor: 'coolGray.200',
              onTrackColor: 'coolGray.200',
            }}
            _dark={{
              onThumbColor: 'green.400',
              offThumbColor: 'green.400',
              offTrackColor: 'coolGray.700',
              onTrackColor: 'coolGray.300',
            }}
          />
        </HStack>
        <HStack alignItems="center">
          <Text
            fontSize="sm"
            fontWeight="medium"
            _light={{ color: 'coolGray.900' }}
            _dark={{ color: 'coolGray.300' }}
          >
            Non-Veg
          </Text>
          <Switch
            size="sm"
            // @ts-ignore
            _light={{
              onThumbColor: 'green.600',
              offThumbColor: 'green.600',
              offTrackColor: 'coolGray.200',
              onTrackColor: 'coolGray.200',
            }}
            _dark={{
              onThumbColor: 'green.400',
              offThumbColor: 'green.400',
              offTrackColor: 'coolGray.700',
              onTrackColor: 'coolGray.300',
            }}
          />
        </HStack>
      </HStack>
    </HStack>
  );
}
const ratingStarts: RatingStarts[] = [
  {
    iconName: 'star',
  },
  {
    iconName: 'star',
  },
  {
    iconName: 'star',
  },
  {
    iconName: 'star',
  },
  {
    iconName: 'star',
  },
];
function Ratings() {
  return (
    <>
      {ratingStarts.map((item, index) => {
        return (
          <HStack alignItems="center" key={index}>
            <Icon
              as={FontAwesome}
              name={item.iconName}
              size="3"
              mr={2}
              _light={{ color: '#D0A000' }}
              _dark={{ color: '#D0A000' }}
            />
          </HStack>
        );
      })}
    </>
  );
}
const dishlist: DishList[] = [
  {
    dishtype: 'veg',
    dishName: 'Panner Pepper Dry',
    dishCategory: 'In starters',
    dishAmount: '₹165',
    buttonText: 'ADD',
  },
  {
    dishtype: 'veg',
    dishName: 'Panner Pepper Dry',
    dishCategory: 'In starters',
    dishAmount: '₹165',
    buttonText: 'ADD',
  },
  {
    dishtype: 'veg',
    dishName: 'Panner Pepper Dry',
    dishCategory: 'In starters',
    dishAmount: '₹165',
    buttonText: 'ADD',
  },
  {
    dishtype: 'veg',
    dishName: 'Panner Pepper Dry',
    dishCategory: 'In starters',
    dishAmount: '₹165',
    buttonText: 'ADD',
  },
  {
    dishtype: 'veg',
    dishName: 'Panner Pepper Dry',
    dishCategory: 'In starters',
    dishAmount: '₹165',
    buttonText: 'ADD',
  },
];
function Dishlist() {
  return (
    <Stack space={{ base: 3, md: 0 }} px={{ base: 4, md: 0 }} mt={{ base: 5 }}>
      {dishlist.map((item, index) => {
        return (
          <Box key={index}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              key={index}
              pb={{ base: 3 }}
            >
              <VStack>
                {item.dishtype === 'veg' ? <IconDishVeg /> : null}
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  {item.dishName}
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  {item.dishCategory}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  {item.dishAmount}
                </Text>
                <HStack mt={2}>
                  <Ratings />
                </HStack>
              </VStack>
              <Button
                variant="outline"
                px={{ base: 7, md: 0 }}
                py={{ base: 2, md: 1 }}
                _light={{ borderColor: 'primary.900' }}
                _dark={{
                  borderColor: 'primary.400',
                }}
                _text={{
                  _light: { color: 'primary.900' },
                  _dark: { color: 'primary.400' },
                  fontSize: 'sm',
                  fontWeight: 'medium',
                }}
                onPress={() => {
                  console.log('hello');
                }}
              >
                {item.buttonText}
              </Button>
            </HStack>
            {index === dishlist.length - 1 ? null : (
              <Divider
                _light={{ bg: 'coolGray.200' }}
                _dark={{ bg: 'coolGray.700' }}
                width="100%"
              />
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
function RestaurantMobile() {
  return (
    <VStack w="100%">
      <HotelName />
      <OptionSelector />
      <Dishlist />
    </VStack>
  );
}
function RestaurantWeb() {
  return (
    <>
      <HotelNameWeb />
      <OptionSelector />
      <DishlistWeb />
    </>
  );
}
function HotelNameWeb() {
  return (
    <VStack space={4}>
      <HStack alignItems="center" space={3}>
        <Image
          height={{ lg: 280, md: 240 }}
          width={{ lg: 600, md: 540 }}
          rounded="sm"
          source={require('../../assets/RestaurentOne.png')}
          alt="Alternate Text"
        />
        <VStack alignItems="center" space={2}>
          <Image
            height={{ lg: 135, md: 115 }}
            width={{ lg: 308, md: 230 }}
            rounded="sm"
            source={require('../../assets/RestaurentTwo.png')}
            alt="Alternate Text"
          />
          <Image
            height={{ lg: 135, md: 115 }}
            width={{ lg: 308, md: 230 }}
            rounded="sm"
            source={require('../../assets/RestaurentThree.png')}
            alt="Alternate Text"
          />
        </VStack>
      </HStack>
      <HStack alignItems="center" justifyContent="space-between" w="100%">
        <Text
          fontSize="4xl"
          fontWeight="medium"
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'coolGray.100' }}
        >
          Hotel Taj
        </Text>
        <HStack
          py={2}
          _light={{ bg: 'success.700' }}
          _dark={{ bg: 'success.700' }}
          width={32}
          borderRadius="sm"
          px={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack alignItems="center" space={{ base: 2, md: 1 }}>
            <Text fontSize="sm" fontWeight="medium" color="white">
              4.1
            </Text>
            <Icon
              as={Ionicons}
              name="star"
              size="3"
              _light={{ color: 'white' }}
            />
          </HStack>
          <Text fontSize="sm" fontWeight="medium" color="white">
            DELIVERY
          </Text>
        </HStack>
      </HStack>

      <Stack px={{ base: 4, md: 0 }} w="40%">
        <Text
          fontSize="2xl"
          fontWeight="normal"
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'white' }}
        >
          North Indian,Mughlai Biryani
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="normal"
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'white' }}
        >
          Yestwanpur, Bangalore
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="normal"
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'white' }}
        >
          10 AM - 11 PM
        </Text>
      </Stack>

      <Divider
        mt={2}
        _light={{ bg: 'coolGray.100' }}
        _dark={{ bg: 'coolGray.700' }}
        width="100%"
      />
    </VStack>
  );
}

function DishlistWeb() {
  return (
    <VStack
      w="100%"
      space={{ base: 3, md: 0 }}
      px={{ base: 4, md: 6 }}
      mt={{ base: 0, md: 3 }}
    >
      {dishlist.map((item, index) => {
        return (
          <Box key={index}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              key={index}
              pb={{ base: 3 }}
            >
              <HStack space={4} mt={3}>
                <Box position="relative" w={140} h={140}>
                  <Image
                    position="absolute"
                    zIndex={-1}
                    height="140"
                    width="140"
                    rounded="sm"
                    source={require('../../assets/RestaurentOne.png')}
                    alt="Alternate Text"
                  />
                  {item.dishtype === 'veg' ? (
                    <Center left={55} mt={1}>
                      <IconDishVeg />
                    </Center>
                  ) : null}
                </Box>
                <VStack>
                  <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                    _light={{ color: 'coolGray.900' }}
                    _dark={{ color: 'white' }}
                  >
                    {item.dishName}
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.400' }}
                  >
                    {item.dishCategory}
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.900' }}
                    _dark={{ color: 'white' }}
                  >
                    {item.dishAmount}
                  </Text>
                  <HStack mt={{ md: 2 }}>
                    <Ratings />
                  </HStack>
                </VStack>
              </HStack>
              <Button
                variant="outline"
                px={{ base: 7, md: 5 }}
                py={{ base: 2, md: 1 }}
                _light={{ borderColor: 'primary.900' }}
                _dark={{
                  borderColor: 'primary.400',
                  _pressed: { bg: 'primary.200' },
                }}
                _text={{
                  _light: { color: 'primary.900' },
                  _dark: { color: 'primary.400' },
                  fontSize: 'sm',
                  fontWeight: 'medium',
                }}
                onPress={() => {
                  console.log('hello');
                }}
              >
                {item.buttonText}
              </Button>
            </HStack>
            {index === dishlist.length - 1 ? null : (
              <Divider
                _light={{ bg: 'coolGray.300' }}
                _dark={{ bg: 'coolGray.700' }}
                width="100%"
              />
            )}
          </Box>
        );
      })}
    </VStack>
  );
}

export default function Restaurants() {
  return (
    <DashboardLayout displaySidebar={false} title="Restaurants">
      <ScrollView>
        <VStack
          px={{ base: 0, md: 4 }}
          py={{ base: 4, md: 4 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'coolGray.50' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.800', base: 'coolGray.800' },
          }}
          borderWidth="1"
          space={{ base: '4', md: '2' }}
          flex={1}
          alignItems={{ md: 'center' }}
        >
          <Hidden from="md">
            <RestaurantMobile />
          </Hidden>
          <Hidden from="base" till="md">
            <RestaurantWeb />
          </Hidden>
        </VStack>
      </ScrollView>
    </DashboardLayout>
  );
}
