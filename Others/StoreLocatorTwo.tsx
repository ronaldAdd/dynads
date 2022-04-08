import React from 'react';
import {
  Text,
  VStack,
  Image,
  Box,
  Button,
  HStack,
  Pressable,
  Icon,
  ScrollView,
  Divider,
} from 'native-base';
import type { ImageSourcePropType } from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconCycle from './components/IconCycle';
import IconPerson from './components/IconPerson';
import IconCar from './components/IconCar';
import IconMapmarker from './components/IconMapmarker';
import IconPhone from './components/IconPhone';
import IconEarth from './components/IconEarth';
import IconClock from './components/IconClock';
import { AntDesign } from '@expo/vector-icons';

type ImageList = {
  storyImageUrl: ImageSourcePropType;
};
type Information = {
  svg: JSX.Element;
  iconText: string;
};
function HotelInformation() {
  return (
    <>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space={{ base: 3, md: 3 }}>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Alternate Text"
            height={24}
            width={20}
            borderRadius="md"
          />
          <VStack space={2}>
            <Text
              fontSize="md"
              fontWeight="bold"
              _light={{ color: 'coolGray.900' }}
              _dark={{ color: 'coolGray.50' }}
            >
              Taj Hotel
            </Text>
            <HStack alignItems="center" space="1">
              <Icon size="4" name={'star'} as={AntDesign} color="amber.400" />
              <Text
                fontSize="md"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                4.6
              </Text>
              <Text
                fontSize="sm"
                fontWeight="medium"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
              >
                (10,120)
              </Text>
            </HStack>
            <HStack alignItems="center" space="1">
              <Text
                fontSize="sm"
                fontWeight="medium"
                _light={{ color: '#AC1F1F' }}
                _dark={{ color: 'coolGray.50' }}
              >
                15 min
              </Text>
              <Text
                fontSize="sm"
                fontWeight="medium"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
              >
                (1.3 Kms)
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack alignItems="center">
          <VStack space={{ base: 3, md: 3 }}>
            <HStack alignItems="center" space={{ base: 3 }}>
              <Pressable
                _light={{ bg: 'primary.900' }}
                _dark={{ bg: 'primary.700' }}
                rounded="full"
                p={2}
                onPress={() => {
                  console.log('hello');
                }}
              >
                <IconCar />
              </Pressable>
              <Pressable
                _light={{ bg: 'coolGray.200' }}
                _dark={{ bg: 'coolGray.400' }}
                rounded="full"
                p={2}
                onPress={() => {
                  console.log('hello');
                }}
              >
                <IconCycle />
              </Pressable>
              <Pressable
                _light={{ bg: 'coolGray.200' }}
                _dark={{ bg: 'coolGray.400' }}
                rounded="full"
                p={2}
                onPress={() => {
                  console.log('hello');
                }}
              >
                <IconPerson />
              </Pressable>
            </HStack>
            <Button
              variant="unstyled"
              _light={{ bg: 'primary.900' }}
              _dark={{ bg: 'primary.800' }}
              onPress={() => {
                console.log('hello');
              }}
            >
              START
            </Button>
          </VStack>
        </HStack>
      </HStack>
    </>
  );
}
const imageList: ImageList[] = [
  {
    storyImageUrl: require('../../assets/chair.jpeg'),
  },
  {
    storyImageUrl: require('../../assets/lamp.jpeg'),
  },
  {
    storyImageUrl: require('../../assets/table.jpg'),
  },
  {
    storyImageUrl: require('../../assets/furniture.jpg'),
  },
];
function HotelImageSlider() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      mt={{ base: 5, md: 5 }}
    >
      {imageList.map((item, index) => {
        return (
          <HStack space={{ base: 0, md: 2 }} key={index}>
            <Image
              source={item.storyImageUrl}
              alt="Alternate Text"
              height={40}
              width={40}
              borderRadius="md"
            />
          </HStack>
        );
      })}
    </ScrollView>
  );
}
const information: Information[] = [
  {
    svg: <IconMapmarker size="12" />,
    iconText:
      '17/R, 1st floor, 18th Cross, 18th Main, Sector 3, HSR Layout, Bangalore, Karnataka 560102',
  },
  {
    svg: <IconClock />,
    iconText: 'Open 24 hours',
  },
  {
    svg: <IconEarth />,
    iconText: 'http://www.bookingkhazana.com',
  },
  {
    svg: <IconPhone />,
    iconText: '080-2349854281',
  },
];
function InformationTab() {
  const [tabName, setTabName] = React.useState('Overview');

  return (
    <Box width={{ md: '100%', base: '100%' }}>
      <HStack mt="4" width="100%" justifyContent="space-between">
        <Pressable
          px="2"
          onPress={() => {
            setTabName('Overview');
          }}
          maxW="25%"
        >
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{
              color: tabName === 'Overview' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName === 'Overview' ? 'primary.700' : 'coolGray.400',
            }}
          >
            Overview
          </Text>
        </Pressable>
        <Pressable
          px="2"
          onPress={() => {
            setTabName('About');
          }}
          maxW="25%"
        >
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{
              color: tabName === 'About' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName === 'About' ? 'primary.700' : 'coolGray.400',
            }}
          >
            About
          </Text>
        </Pressable>
        <Pressable
          px="2"
          onPress={() => {
            setTabName('Reviews');
          }}
          maxW="25%"
        >
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{
              color: tabName === 'Reviews' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName === 'Reviews' ? 'primary.700' : 'coolGray.400',
            }}
          >
            Reviews
          </Text>
        </Pressable>
        <Pressable
          px="2"
          onPress={() => {
            setTabName('Photos');
          }}
          maxW="25%"
        >
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{
              color: tabName === 'Photos' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName === 'Photos' ? 'primary.700' : 'coolGray.400',
            }}
          >
            Photos
          </Text>
        </Pressable>
        <Pressable
          px="2"
          onPress={() => {
            setTabName('Updates');
          }}
          maxW="25%"
        >
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{
              color: tabName === 'Updates' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName === 'Updates' ? 'primary.700' : 'coolGray.400',
            }}
          >
            Updates
          </Text>
        </Pressable>
      </HStack>
      <Divider />
      {tabName === 'Overview' ? (
        <VStack>
          {information.map((item, index) => {
            return (
              <HStack alignItems="center" space={{ base: 2 }} key={index}>
                {item.svg}
                <Text>{item.iconText}</Text>
              </HStack>
            );
          })}
        </VStack>
      ) : null}
    </Box>
  );
}

export default function StoreLocatorTwo() {
  return (
    <DashboardLayout title="">
      <VStack
        px={{ base: 4, md: 32 }}
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
        space={4}
        flex={1}
        alignItems={{ md: 'center' }}
      >
        <HotelInformation />
        <HotelImageSlider />
        <InformationTab />
      </VStack>
    </DashboardLayout>
  );
}
