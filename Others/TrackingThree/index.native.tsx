import React from 'react';
import {
  Text,
  VStack,
  Button,
  Center,
  Hidden,
  Box,
  Pressable,
  HStack,
  Stack,
  Avatar,
  Icon,
  Divider,
  Image,
} from 'native-base';
import IconHome from '../components/IconHome';
import IconOrder from '../components/IconOrder';
import IconSearch from '../components/IconSearch';
import IconProfile from '../components/IconProfile';
import IconMap from '../components/IconMap';
import IconMessage from '../components/IconMessage';
import IconMobile from '../components/IconMobile';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions';
import Constants from 'expo-constants';

const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.GOOGLE_MAPS_API_KEY;
type Rating = {
  type: string;
  iconName: string;
};

type RestaurentInfo = {
  svg: object;
  name: string;
  address: string;
};
const rating: Rating[] = [
  {
    type: 'fill',
    iconName: 'star',
  },
  {
    type: 'fill',
    iconName: 'star',
  },
  {
    type: 'fill',
    iconName: 'star',
  },
  {
    type: 'fill',
    iconName: 'star',
  },
  {
    type: 'empty',
    iconName: 'star',
  },
];
const restaurentInfo: RestaurentInfo[] = [
  {
    svg: <IconMap />,
    name: 'Drop Location',
    address: '47 W 13th St, New York, NY 11214',
  },
];
function BottomNavigation() {
  return (
    <Hidden from="md">
      <Box
        _light={{ bg: 'white' }}
        _dark={{ bg: 'customGray' }}
        p="2"
        borderTopLeftRadius="12"
        borderTopRightRadius="12"
        height={20}
        width="100%"
        position="absolute"
        px="6"
        bottom="0"
        left="0"
        right="0"
        safeAreaBottom
      >
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <HStack justifyContent="space-between" pt={2}>
            <VStack alignItems="center" space="2">
              <Box
                height={6}
                width={8}
                alignItems="center"
                justifyContent="center"
              >
                <IconHome />
              </Box>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Home
              </Text>
            </VStack>
            <VStack alignItems="center" space="2">
              <Box
                height={6}
                width={8}
                alignItems="center"
                justifyContent="center"
              >
                <IconOrder />
              </Box>
              <Text
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.500' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Orders
              </Text>
            </VStack>
            <VStack alignItems="center" space="2">
              <Box
                height={6}
                width={8}
                alignItems="center"
                justifyContent="center"
              >
                <IconSearch />
              </Box>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Search
              </Text>
            </VStack>
            <VStack alignItems="center" space="2">
              <Box
                height={6}
                width={8}
                alignItems="center"
                justifyContent="center"
              >
                <IconProfile />
              </Box>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Profile
              </Text>
            </VStack>
          </HStack>
        </Pressable>
      </Box>
    </Hidden>
  );
}

function InformationBox() {
  return (
    <Box
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.800' }}
      borderRadius="lg"
      py={5}
      width="100%"
      mb={{ base: 24, md: 0 }}
      mt="auto"
    >
      <HStack alignItems="center" justifyContent="space-between" px={4}>
        <HStack alignItems="center" space={3}>
          <Avatar source={require('../../../assets/man.jpg')} />
          <VStack>
            <Text
              fontSize="md"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.100' }}
            >
              Prime Burger
            </Text>
            <HStack>
              {rating.map((item, index) => {
                return item.type === 'fill' ? (
                  <Icon
                    key={index}
                    as={FontAwesome}
                    name={item.iconName}
                    size="xxs"
                    color="#F6C529"
                  />
                ) : (
                  <Icon
                    key={index}
                    as={FontAwesome}
                    name={item.iconName}
                    size="xxs"
                    color="coolGray.200"
                  />
                );
              })}
            </HStack>
          </VStack>
        </HStack>
        <HStack alignItems="center" space={5}>
          <IconMessage />
          <IconMobile />
        </HStack>
      </HStack>
      <Divider
        mt={3}
        _light={{ bg: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.700' }}
      />
      <VStack space={8} mt={3} px={4}>
        {restaurentInfo.map((item, index) => {
          return (
            <HStack alignItems="center" space={3} key={index}>
              <Center
                _light={{ bg: 'primary.100' }}
                _dark={{ bg: 'coolGray.600' }}
                p={3}
                rounded="full"
              >
                {item.svg}
              </Center>
              <VStack>
                <Text
                  fontSize="xs"
                  fontWeight="normal"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  {item.name}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="normal"
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'white' }}
                >
                  {item.address}
                </Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
      <Stack space={3} mt={9} px={4}>
        <Button
          w="100%"
          py={3}
          borderRadius="4"
          _dark={{
            bg: 'primary.800',
            _focus: { bg: 'primary.700' },
          }}
          _light={{ bg: 'primary.900', _focus: { bg: 'primary.900' } }}
          _text={{ fontSize: 'sm', fontWeight: 'medium' }}
          onPress={() =>
            console.log('pair your device with help of this button')
          }
        >
          START PICKUP
        </Button>
        <Button
          variant="outline"
          _light={{ borderColor: 'primary.900' }}
          _dark={{ borderColor: 'primary.400' }}
          _text={{
            _light: { color: 'primary.900' },
            _dark: { color: 'primary.400' },
          }}
          onPress={() => {
            console.log('hello');
          }}
          py={3}
        >
          CANCEL ORDER
        </Button>
      </Stack>
    </Box>
  );
}
export default function TrackingOne() {
  return (
    <DashboardLayout title={''} displaySidebar={false} displayBackIcon={false}>
      <MapView
        style={{
          flex: 1,
        }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          latitude: 12.910938686053615,
          longitude: 77.60184408715048,
        }}
      >
        <Marker
          coordinate={{
            latitude: 12.906263633852848,
            longitude: 77.6012477730121,
          }}
        >
          <Image
            source={require('../components/IconRestaurant.png')}
            style={{ height: 35, width: 35 }}
            alt="Alternate Text"
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: 12.910938686053615,
            longitude: 77.60184408715048,
          }}
        >
          <Image
            source={require('../components/ImageRide.png')}
            style={{ height: 35, width: 35 }}
            alt="Alternate Text"
          />
        </Marker>

        <MapViewDirections
          origin={{
            latitude: 12.906263633852848,
            longitude: 77.6012477730121,
          }}
          destination={{
            latitude: 12.910938686053615,
            longitude: 77.60184408715048,
          }}
          apikey={GOOGLE_MAPS_API_KEY}
        />
      </MapView>
      <BottomNavigation />
      <InformationBox />
    </DashboardLayout>
  );
}
