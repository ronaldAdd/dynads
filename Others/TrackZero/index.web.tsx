import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MapView, { PROVIDER_GOOGLE } from 'react-native-web-maps';
import { VStack, Text, Box, Slider } from 'native-base';
import IconSearch from '../components/IconSearch';
import Constants from 'expo-constants';

const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.GOOGLE_MAPS_API_KEY;
const MAP_SCRIPT_WITH_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;

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
          title=""
          displaySidebar={false}
          displayScreenTitle={false}
        >
          <MapView
            flex={1}
            style={{
              height: 560,
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
              height={80}
              _light={{ bg: 'white' }}
              _dark={{ bg: 'coolGray.800' }}
            >
              <IconSearch />
              <Text
                fontSize="md"
                _light={{ color: 'coolGray.600' }}
                _dark={{ color: 'coolGray.400' }}
              >
                Searching For Orders...
              </Text>
            </Box>
          </VStack>
        </DashboardLayout>
      ) : (
        'Loading ...'
      )}
    </>
  );
}
