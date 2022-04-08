import { Box, HStack, Pressable, VStack, Text, Slider } from 'native-base';
import React from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import IconHome from '../components/IconHome';
import IconOrder from '../components/IconOrder';
import IconProfile from '../components/IconProfile';
import IconSearch from '../components/IconSearch';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function TrackingZero() {
  return (
    <DashboardLayout title={''}>
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
      <VStack mt="auto" mb="24" space="0">
        <Slider defaultValue={65} h={2}>
          <Slider.Track rounded="0">
            <Slider.FilledTrack
              bg="primary.900"
              _dark={{ bg: 'primary.700' }}
            />
          </Slider.Track>
        </Slider>
        <Box
          alignItems="center"
          justifyContent="center"
          height={32}
          _light={{ bg: 'white' }}
          _dark={{ bg: 'coolGray.800' }}
        >
          <IconSearch />
          <Text
            fontSize="md"
            mt={1}
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Searching For Orders...
          </Text>
        </Box>
      </VStack>
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
                Order
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
    </DashboardLayout>
  );
}
