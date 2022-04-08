import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MapView, { PROVIDER_GOOGLE } from 'react-native-web-maps';
import {
  Button,
  HStack,
  VStack,
  Text,
  Box,
  Stack,
  Center,
  Divider,
} from 'native-base';
import IconRestaurent from '../components/IconRestaurent';
import IconMap from '../components/IconMap';
import Constants from 'expo-constants';

const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.GOOGLE_MAPS_API_KEY;
const MAP_SCRIPT_WITH_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
type RestaurentInfo = {
  svg: object;
  name: string;
  address: string;
};
const restaurentInfo: RestaurentInfo[] = [
  {
    svg: <IconRestaurent />,
    name: 'Aami Bangali Restaurant',
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
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.800' }}
      py={5}
      width="100%"
      mb={{ base: 24, md: 0 }}
      mt="auto"
    >
      <VStack px={{ md: 32 }}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            Food Order
          </Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.400' }}
          >
            40 min | 0.3 miles
          </Text>
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
                  fontWeight="medium"
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
          ACCEPT
        </Button>
        <Button
          variant="outline"
          _light={{ borderColor: 'primary.900' }}
          _dark={{ borderColor: 'primary.500' }}
          _text={{
            _light: { color: 'primary.900' },
            _dark: { color: 'primary.500' },
          }}
          onPress={() => {
            console.log('hello');
          }}
          py={3}
        >
          REJECT
        </Button>
      </Stack>
    </Box>
  );
}

export default function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!document.body.dataset.mapLoaded) {
      const mapScript = document.createElement('script');
      mapScript.src = MAP_SCRIPT_WITH_API_KEY;

      mapScript.onload = () => {
        document.body.dataset.mapLoaded = 'true';
        setMapLoaded(true);
      };
      document.head.appendChild(mapScript);
    } else {
      setMapLoaded(true);
    }
  }, []);

  return (
    <>
      {mapLoaded ? (
        <DashboardLayout
          title={''}
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
            <MapView
              style={{
                height: 400,
              }}
              provider={PROVIDER_GOOGLE}
              region={{
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                latitude: 12.91095437167937,
                longitude: 77.60180353953143,
              }}
            >
              <MapView.Marker
                draggable
                coordinate={{
                  latitude: 12.91095437167937,
                  longitude: 77.60180353953143,
                }}
              />
            </MapView>
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
