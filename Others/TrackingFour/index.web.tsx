import React, { useEffect, useState, useRef } from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import {
  Button,
  HStack,
  VStack,
  Text,
  Box,
  Stack,
  Center,
  Divider,
  Avatar,
  Icon,
  View,
} from 'native-base';
import IconMap from '../components/IconMap';
import { FontAwesome } from '@expo/vector-icons';
import IconMessage from '../components/IconMessage';
import IconMobile from '../components/IconMobile';
import IconPin from '../components/IconPin';
import Constants from 'expo-constants';

const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.GOOGLE_MAPS_API_KEY;
const MAP_SCRIPT_WITH_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
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
    svg: <IconPin />,
    name: 'Pickup Location',
    address: '47 W 13th St, New York, NY 11214',
  },
  {
    svg: <IconMap />,
    name: 'Drop Location',
    address: 'Lafayette St, New York, NY 10013',
  },
];
function InformationBox() {
  return (
    <Box
      py={5}
      mt="auto"
      width="100%"
      mb={{ base: 24, md: 0 }}
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.800' }}
    >
      <VStack px={{ md: 32 }}>
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
      </VStack>
      <Divider mt={{ md: 6 }} />
      <VStack space={8} mt={5} px={{ md: 32 }}>
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
      <Stack space={3} mt={9} px={{ md: 32 }}>
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
          ARRIVED
        </Button>
      </Stack>
    </Box>
  );
}

export default function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if map script is already present in DOM
    if (!document.body.dataset.mapLoaded) {
      const mapScript = document.createElement('script');
      mapScript.src = MAP_SCRIPT_WITH_API_KEY;

      mapScript.onload = () => {
        // set dataset property on body to indicate map script has been loaded.
        document.body.dataset.mapLoaded = 'true';
        setMapLoaded(true);
      };
      document.head.appendChild(mapScript);
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      const map = new window.google.maps.Map(
        mapContainerRef.current as HTMLElement,
        {
          zoom: 15,
          mapTypeId: 'terrain',
          center: { lat: 12.91095437167937, lng: 77.60180353953143 },
        }
      );

      type Cord = {
        lat: number;
        lng: number;
      };
      const pathCoords: Cord[] = [
        {
          lat: 12.91072,
          lng: 77.60173,
        },
        {
          lat: 12.91003,
          lng: 77.60191,
        },
        {
          lat: 12.90932,
          lng: 77.60214,
        },
        {
          lat: 12.90863,
          lng: 77.60231,
        },
        {
          lat: 12.9086,
          lng: 77.60185,
        },
        {
          lat: 12.90857,
          lng: 77.60166,
        },
        {
          lat: 12.90852,
          lng: 77.60059,
        },
        {
          lat: 12.90851,
          lng: 77.60038,
        },
        {
          lat: 12.90825,
          lng: 77.60041,
        },
        {
          lat: 12.90806,
          lng: 77.60041,
        },
        {
          lat: 12.90784,
          lng: 77.60044,
        },
        {
          lat: 12.90744,
          lng: 77.60055,
        },
        {
          lat: 12.90731,
          lng: 77.60061,
        },
        {
          lat: 12.90701,
          lng: 77.60089,
        },
        {
          lat: 12.90579,
          lng: 77.60183,
        },
        {
          lat: 12.90556,
          lng: 77.60195,
        },
        {
          lat: 12.9055,
          lng: 77.60196,
        },
        {
          lat: 12.90546,
          lng: 77.60197,
        },
        {
          lat: 12.90545,
          lng: 77.60186,
        },
        {
          lat: 12.90552,
          lng: 77.60183,
        },
        {
          lat: 12.90557,
          lng: 77.60181,
        },
        {
          lat: 12.90555,
          lng: 77.60173,
        },
        {
          lat: 12.90596,
          lng: 77.60145,
        },
      ];

      const deliveryPath = new window.google.maps.Polyline({
        path: pathCoords,
        geodesic: true,
        strokeColor: '#000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      deliveryPath.setMap(map);

      new window.google.maps.Marker({
        position: { lat: 12.906263633852848, lng: 77.6012477730121 },
        map: map,
        icon: {
          url: require('../components/IconRestaurant.png'),
          size: new window.google.maps.Size(36, 50),
          scaledSize: new window.google.maps.Size(36, 50),
        },
      });

      new window.google.maps.Marker({
        position: { lat: 12.910938686053615, lng: 77.60184408715048 },
        map: map,
        icon: {
          url: require('../components/ImageRide.png'),
          size: new window.google.maps.Size(36, 50),
          scaledSize: new window.google.maps.Size(36, 50),
          anchor: new window.google.maps.Point(10, 0),
        },
      });
    }
  }, [mapLoaded]);

  return (
    <>
      {mapLoaded ? (
        <DashboardLayout
          title=""
          displaySidebar={false}
          displayScreenTitle={false}
        >
          <VStack
            safeAreaBottom
            flex="1"
            space={{ base: '4', md: '0' }}
            px={{ base: '0', md: '10', lg: '0' }}
            pb={{ base: '4', md: '8' }}
            rounded={{ md: 'lg' }}
            borderWidth={{ base: '0', md: '1' }}
            _light={{
              bg: { md: 'white', base: 'primary.50' },
              borderColor: 'coolGray.200',
            }}
            _dark={{
              bg: { base: 'coolGray.700', md: 'coolGray.700' },
              borderColor: 'coolGray.700',
            }}
          >
            <View flex="1" ref={mapContainerRef} />
            <VStack
              pt={0}
              _light={{ bg: 'white' }}
              _dark={{ bg: 'coolGray.900' }}
            >
              <InformationBox />
            </VStack>
          </VStack>
        </DashboardLayout>
      ) : (
        'Loading ...'
      )}
    </>
  );
}
