import React, { useEffect, useState } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MapView, { PROVIDER_GOOGLE } from 'react-native-web-maps';
import {
  HStack,
  VStack,
  Text,
  Icon,
  Input,
  Box,
  Center,
  Hidden,
  IconButton,
  Stack,
  Pressable,
  ScrollView,
} from 'native-base';
import Constants from 'expo-constants';

const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.GOOGLE_MAPS_API_KEY;
const MAP_SCRIPT_WITH_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
type Place = {
  iconName: string;
  keyword: string;
  address: string;
};

type RecentSearchItemProps = {
  data: Place;
  index: number;
};

function RecentSearchItem({ index, data }: RecentSearchItemProps) {
  return (
    <Pressable>
      <HStack
        w={{ base: 'full', md: 'full' }}
        alignItems="center"
        justifyContent="space-between"
        key={index}
      >
        <HStack alignItems="center" space="4">
          <Stack
            direction={{ base: 'column', md: 'column' }}
            space={{ base: '1', md: '1' }}
          >
            <Center
              _light={{ bg: data.address ? 'primary.100' : 'red.100' }}
              _dark={{ bg: data.address ? 'coolGray.700' : 'red.100' }}
              p="2"
              rounded="full"
            >
              <Icon
                as={Ionicons}
                name={data.iconName}
                size="4"
                _light={{ color: data.address ? 'primary.900' : 'red.500' }}
                _dark={{ color: data.address ? 'primary.500' : 'red.500' }}
              />
            </Center>
            <Text
              fontSize="10"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.100' }}
              isTruncated
            >
              {data.address ? '1.6 kms' : ''}
            </Text>
          </Stack>

          <Stack
            direction={{ base: 'column', md: 'column' }}
            space={{ base: '0', md: '0' }}
          >
            <Text
              fontSize="md"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontWeight="medium"
            >
              {data.keyword}
            </Text>
            <Text
              fontSize="sm"
              _light={{ color: 'coolGray.400' }}
              _dark={{ color: 'coolGray.500' }}
              isTruncated
            >
              {data.address}
            </Text>
          </Stack>
        </HStack>
        <Icon
          as={Feather}
          name="arrow-up-left"
          size="6"
          _light={{ color: 'coolGray.400' }}
          _dark={{ color: 'coolGray.400' }}
        />
      </HStack>
    </Pressable>
  );
}
const place: Place[] = [
  {
    iconName: 'location-sharp',
    keyword: 'Ram Bagh',
    address: 'Agra, Uttar Pradesh',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Sultanpura',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Sultanpura',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Sultanpura',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Railway Hospital',
    address: 'Rainbow Hospitals,Sultanpura ',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Ram Raghu Hospital',
    address: 'Mahatma Gandhi Road',
  },
];
export default function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [textInput, setTextInput] = useState('');

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
        <DashboardLayout displaySidebar={false} title={'Location'}>
          <VStack
            px={{ base: '4', md: '4' }}
            _light={{ bg: 'white', borderColor: 'coolGray.200' }}
            _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
            rounded={{ md: '8' }}
            borderWidth={{ md: '1' }}
            flexGrow={1}
          >
            <HStack flexGrow={1} space="4">
              <Box
                width={{ base: '100%', md: '50%', lg: '30%' }}
                py={{ base: '4', md: '4' }}
              >
                <Input
                  py="2"
                  size="md"
                  _dark={{
                    borderColor: 'coolGray.700',
                  }}
                  value={textInput}
                  onChangeText={setTextInput}
                  InputLeftElement={
                    <>
                      <Hidden from="base">
                        <Icon
                          ml="4"
                          as={<Ionicons name="search" />}
                          size="6"
                          _light={{ color: 'coolGray.400' }}
                          _dark={{ color: 'coolGray.200' }}
                        />
                      </Hidden>
                      <IconButton
                        p="0"
                        ml="4"
                        variant="unstyled"
                        icon={
                          <Icon
                            as={<Ionicons name="arrow-back" />}
                            size="6"
                            _light={{ color: 'coolGray.400' }}
                            _dark={{ color: 'coolGray.400' }}
                          />
                        }
                      />
                    </>
                  }
                  InputRightElement={
                    <Hidden from="md" till="md">
                      <IconButton
                        onPress={() => {
                          setTextInput('');
                        }}
                        p="0"
                        mr="4"
                        variant="unstyled"
                        icon={
                          <Icon
                            as={<Ionicons name="close" />}
                            size="6"
                            _light={{ color: 'coolGray.400' }}
                            _dark={{ color: 'coolGray.400' }}
                          />
                        }
                      />
                    </Hidden>
                  }
                  placeholder="Search here"
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                  <VStack space="4" mt={3} safeAreaBottom>
                    {place.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <RecentSearchItem index={index} data={item} />
                        </React.Fragment>
                      );
                    })}
                  </VStack>
                </ScrollView>
              </Box>
              <Box width={{ base: '0%', md: '50%', lg: '70%' }}>
                <MapView
                  style={{
                    height: '100%',
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
              </Box>
            </HStack>
          </VStack>
        </DashboardLayout>
      ) : (
        'Loading ...'
      )}
    </>
  );
}
