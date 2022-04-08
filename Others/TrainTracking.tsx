import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Center,
  Divider,
  IconButton,
  ScrollView,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Platform } from 'react-native';
import IconTrain from './components/IconTrain';

type ItemsList = {
  detailAvailable: boolean;
  detailText: string;
};
const itemsList: ItemsList[] = [
  {
    detailAvailable: false,
    detailText: '10 Stations ( 110 Kms )',
  },
  {
    detailAvailable: true,
    detailText: '10 Stations ( 110 Kms )',
  },
  {
    detailAvailable: false,
    detailText: '10 Stations ( 110 Kms )',
  },
  {
    detailAvailable: false,
    detailText: '',
  },
];
export default function TrainTracking() {
  return (
    <DashboardLayout displaySidebar={false} title="HBL to BLR">
      <ScrollView>
        <VStack
          px={{ base: 4, md: 8, lg: 8 }}
          py={{ base: 4, md: 8 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          space="4"
        >
          <HStack alignItems="center">
            <Center w={36}>
              <Icon
                size={3}
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.500' }}
                as={FontAwesome}
                name={'circle'}
              />
            </Center>

            <HStack
              flex={1}
              justifyContent="space-between"
              ml={2}
              alignItems="center"
            >
              <HStack alignItems="center">
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  Start Majestic
                </Text>
                <Box
                  _light={{
                    _text: {
                      color: 'white',
                      fontSize: 'xs',
                    },
                    bg: 'coolGray.500',
                  }}
                  _dark={{
                    _text: {
                      color: 'coolGray.300',
                      fontSize: 'xs',
                    },
                    bg: 'coolGray.700',
                  }}
                  borderRadius="sm"
                  py={0.5}
                  px={2}
                  ml={2}
                >
                  PF 2
                </Box>
              </HStack>
              <Text
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.400' }}
                fontWeight="normal"
                fontSize="sm"
              >
                15:00
              </Text>
            </HStack>
          </HStack>

          {itemsList.map((item, index) => {
            return (
              <HStack alignItems="center" ml={1} key={index}>
                <IconButton
                  variant="unstyled"
                  icon={
                    <Icon
                      size={3}
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.500' }}
                      as={FontAwesome}
                      name={'circle'}
                    />
                  }
                />

                {item.detailAvailable ? (
                  <Text
                    ml={4}
                    fontSize="xs"
                    _light={{ color: 'coolGray.400' }}
                    _dark={{ color: 'coolGray.300' }}
                  >
                    {item.detailText}
                  </Text>
                ) : null}
              </HStack>
            );
          })}

          <HStack>
            <VStack
              h={96}
              bg="primary.900"
              rounded="full"
              alignContent="center"
              w={8}
              justifyContent="space-between"
            >
              <Center>
                <IconButton
                  variant="unstyled"
                  icon={
                    <Icon
                      ml={1}
                      size={6}
                      color="white"
                      as={FontAwesome}
                      name={'circle'}
                    />
                  }
                />
              </Center>
              <Center>
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} my={1} bg="white" />
                <Divider orientation="vertical" h={2} my={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} my={1} bg="white" />
                <Divider orientation="vertical" h={2} my={1} bg="white" />
              </Center>
              <Center bg="white" rounded="full" p={2}>
                <IconTrain />
              </Center>
              <Center>
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} mb={1} bg="white" />
                <Divider orientation="vertical" h={2} my={1} bg="white" />
                <Divider orientation="vertical" h={2} my={1} bg="white" />
              </Center>
              <Center>
                <IconButton
                  variant="unstyled"
                  icon={
                    <Icon
                      ml={1}
                      size={6}
                      color="white"
                      as={FontAwesome}
                      name={'circle'}
                    />
                  }
                />
              </Center>
            </VStack>
            <VStack flex={1} mt={2} ml={2}>
              <HStack justifyContent="space-between" alignItems="center">
                <HStack ml={2} alignItems="center">
                  <Text
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    TUMKUR
                  </Text>
                  <Box
                    _light={{
                      _text: {
                        color: 'white',
                        fontSize: 'xs',
                      },
                      bg: 'coolGray.500',
                    }}
                    _dark={{
                      _text: {
                        color: 'coolGray.300',
                        fontSize: 'xs',
                      },
                      bg: 'coolGray.700',
                    }}
                    borderRadius="sm"
                    py={0.5}
                    px={2}
                    ml={2}
                  >
                    PF 2
                  </Box>
                </HStack>
                <Text
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.400' }}
                  fontWeight="normal"
                  fontSize="sm"
                >
                  15:00
                </Text>
              </HStack>

              <Text
                ml={2}
                color="emerald.600"
                fontSize={10}
                fontWeight="medium"
              >
                On Time
              </Text>
              <Text
                mt={6}
                ml={2}
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.300' }}
              >
                6 Stations ( 110 Kms )
              </Text>
              <HStack
                mt={86}
                justifyContent="space-between"
                alignItems="center"
              >
                <HStack ml={2} alignItems="center">
                  <Text
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                    fontWeight="medium"
                  >
                    DAVANGERE
                  </Text>
                  <Box
                    _light={{
                      _text: {
                        color: 'white',
                        fontSize: 'xs',
                      },
                      bg: 'red.400',
                    }}
                    _dark={{
                      _text: {
                        color: 'coolGray.300',
                        fontSize: 'xs',
                      },
                      bg: 'red.400',
                    }}
                    borderRadius="sm"
                    px={1}
                    ml={2}
                  >
                    PF 2
                  </Box>
                </HStack>
                <Text
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.400' }}
                  fontWeight="normal"
                  fontSize="sm"
                >
                  15:00
                </Text>
              </HStack>
              <Text color="red.500" fontSize={10} fontWeight="medium" ml={2.5}>
                Delayed by 10 min
              </Text>
              <HStack mt={108} justifyContent="space-between">
                <HStack
                  ml={2}
                  mt={Platform.OS === 'ios' ? 4 : 2}
                  alignItems="center"
                >
                  <Text fontWeight="medium">Haveri</Text>
                  <Box
                    _light={{
                      _text: {
                        color: 'white',
                        fontSize: 'xs',
                      },
                      bg: 'coolGray.500',
                    }}
                    _dark={{
                      _text: {
                        color: 'coolGray.300',
                        fontSize: 'xs',
                      },
                      bg: 'coolGray.700',
                    }}
                    borderRadius="sm"
                    py={0.5}
                    px={2}
                    ml={2}
                  >
                    PF 2
                  </Box>
                </HStack>
                <VStack>
                  <Text
                    _light={{ color: 'emerald.600' }}
                    _dark={{ color: 'emerald.600' }}
                    fontWeight="normal"
                    fontSize="sm"
                    pt={8}
                  >
                    Expected
                  </Text>
                  <Text
                    _light={{ color: 'emerald.600' }}
                    _dark={{ color: 'emerald.600' }}
                    fontWeight="normal"
                    fontSize="sm"
                    textAlign="right"
                  >
                    19:00
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
          {itemsList.map((item, index) => {
            return (
              <HStack alignItems="center" ml={1} key={index}>
                <IconButton
                  variant="unstyled"
                  icon={
                    <Icon
                      size={3}
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.500' }}
                      as={FontAwesome}
                      name={'circle'}
                    />
                  }
                />
                {item.detailAvailable ? (
                  <Text
                    ml={4}
                    _light={{ color: 'coolGray.400' }}
                    _dark={{ color: 'coolGray.300' }}
                  >
                    {item.detailText}
                  </Text>
                ) : null}
              </HStack>
            );
          })}
          <HStack alignItems="center">
            <Center w={10}>
              <IconButton
                variant="unstyled"
                icon={
                  <Icon
                    size={3}
                    _light={{ color: 'coolGray.400' }}
                    _dark={{ color: 'coolGray.500' }}
                    as={FontAwesome}
                    name={'circle'}
                  />
                }
              />
            </Center>

            <HStack
              flex={1}
              ml={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack alignItems="center">
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontWeight="medium"
                >
                  Hubbali
                </Text>
                <Box
                  _light={{
                    _text: {
                      color: 'white',
                      fontSize: 'xs',
                    },
                    bg: 'coolGray.500',
                  }}
                  _dark={{
                    _text: {
                      color: 'coolGray.300',
                      fontSize: 'xs',
                    },
                    bg: 'coolGray.700',
                  }}
                  borderRadius="sm"
                  py={0.5}
                  px={2}
                  ml={2}
                >
                  PF 2
                </Box>
              </HStack>

              <Text
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.400' }}
                fontWeight="normal"
                fontSize="sm"
                textAlign="right"
              >
                21:00
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </ScrollView>
    </DashboardLayout>
  );
}
