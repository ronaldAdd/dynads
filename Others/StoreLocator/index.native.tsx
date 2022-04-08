import React, { useState } from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  IconButton,
  Input,
  Pressable,
  ScrollView,
  Center,
  Stack,
  Hidden,
} from 'native-base';
import { Feather, Ionicons } from '@expo/vector-icons';
import DashboardLayout from '../../../layouts/DashboardLayout';

type Place = {
  iconName: string;
  keyword: string;
  address: string;
};

type RecentSearchItemProps = {
  data: Place;
  index: number;
};
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
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals,Sultanpura',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals,Sultanpura',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals, Maharishi ',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals',
  },
];

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
            direction={{ base: 'column', md: 'row' }}
            space={{ base: '1', md: '2' }}
            alignItems={{ md: 'center' }}
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
            direction={{ base: 'column', md: 'row' }}
            space={{ base: '0', md: '2' }}
            alignItems={{ md: 'center' }}
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

export default function () {
  const [textInput, setTextInput] = useState('');

  return (
    <DashboardLayout displaySidebar={false} title={'Location'}>
      <VStack
        px={{ base: '4', md: '8' }}
        py={{ base: '4', md: '6' }}
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
        rounded={{ md: '8' }}
        borderWidth={{ md: '1' }}
        safeAreaBottom
      >
        <Input
          py="4"
          size="md"
          value={textInput}
          onChangeText={setTextInput}
          _dark={{
            borderColor: 'coolGray.700',
          }}
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
          }
          placeholder="Search here"
        />

        <ScrollView>
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
      </VStack>
    </DashboardLayout>
  );
}
