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
} from 'native-base';
import IconHome from '../components/IconHome';
import IconOrder from '../components/IconOrder';
import IconSearch from '../components/IconSearch';
import IconProfile from '../components/IconProfile';
import IconMap from '../components/IconMap';
import IconRestaurent from '../components/IconRestaurent';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type RestaurentInfo = {
  svg: object;
  name: string;
  address: string;
};

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
      borderRadius="lg"
      py={5}
      px={{ base: 4, md: 32 }}
      width="100%"
      mb={{ base: 24, md: 0 }}
      mt="auto"
    >
      <VStack>
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

        <VStack space={8} mt={3}>
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
        <Stack space={3} mt={9}>
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
      </VStack>
    </Box>
  );
}

export default function TrackingOne() {
  return (
    <DashboardLayout title={''} displaySidebar={false} displayBackIcon={false}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          latitude: 12.91095437167937,
          longitude: 77.60180353953143,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: 12.91095437167937,
            longitude: 77.60180353953143,
          }}
        />
      </MapView>
      <BottomNavigation />
      <InformationBox />
    </DashboardLayout>
  );
}
