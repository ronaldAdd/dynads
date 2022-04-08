import React from 'react';
import {
  Text,
  VStack,
  Button,
  Box,
  Divider,
  HStack,
  ScrollView,
  Pressable,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import Svg, { Path } from 'react-native-svg';
type List = {
  seatNumber: string;
  available?: boolean;
  blocked?: boolean;
  selected?: boolean;
};

type ListGoldOne = {
  seatNumber: string;
  available?: boolean;
  blocked?: boolean;
  selected?: boolean;
};

type ListGoldTwo = {
  seatNumber: string;
  available?: boolean;
  blocked?: boolean;
  selected?: boolean;
};
type SeatRowProps = {
  data: List[];
};
type SeatRowGoldTwoProps = {
  data: ListGoldTwo[];
};
type SeatRowGoldProps = {
  data: ListGoldOne[];
};
const list: List[] = [
  {
    seatNumber: '1',
    available: false,
    blocked: true,
    selected: false,
  },
  {
    seatNumber: '2',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '3',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '4',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '5',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '6',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '7',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '8',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '9',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '10',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '11',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '12',
    available: false,
    blocked: false,
    selected: false,
  },
];
const silverRow1 = JSON.parse(JSON.stringify(list));
silverRow1[1].available = true;
silverRow1[2].available = true;
silverRow1[6].available = true;
silverRow1[7].available = true;
const platinumRow2 = JSON.parse(JSON.stringify(list));
platinumRow2[3].selected = true;
platinumRow2[4].selected = true;
platinumRow2[5].selected = true;
platinumRow2[6].selected = true;
platinumRow2[7].selected = true;
platinumRow2[11].selected = true;
const listGold1: ListGoldOne[] = [
  {
    seatNumber: '1',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '2',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '3',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '4',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '5',
    available: false,
    blocked: false,
    selected: false,
  },
];

const listGold2: ListGoldTwo[] = [
  {
    seatNumber: '6',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '7',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '8',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '9',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '10',
    available: false,
    blocked: false,
    selected: false,
  },
  {
    seatNumber: '11',
    available: false,
    blocked: false,
    selected: false,
  },
];
const goldRow1 = JSON.parse(JSON.stringify(listGold1));
goldRow1[0].available = true;
goldRow1[1].available = true;
goldRow1[2].available = true;
goldRow1[3].available = true;
const goldRow2 = JSON.parse(JSON.stringify(listGold2));
goldRow2[4].selected = true;
goldRow2[3].selected = true;
goldRow2[5].selected = true;

function SeatRow(props: SeatRowProps) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <HStack space={{ base: 1, md: 8 }} alignItems="center">
        {props?.data?.map((item, index) => {
          if (item.available) {
            return (
              <HStack key={index} alignItems="center">
                <Pressable
                  onPress={() => {
                    console.log('the item selected');
                  }}
                >
                  <Box
                    borderWidth="1"
                    borderRadius="4"
                    h="6"
                    w="6"
                    alignItems="center"
                    justifyContent="center"
                    _light={{ borderColor: 'coolGray.500', bg: 'white' }}
                    _dark={{
                      borderColor: 'coolGray.700',
                      bg: { base: 'coolGray.800', md: 'coolGray.900' },
                    }}
                  >
                    <Text
                      _light={{ color: 'coolGray.500' }}
                      _dark={{
                        color: 'coolGray.50',
                      }}
                      fontSize="xs"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {item.seatNumber}
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            );
          }
          if (item.selected) {
            return (
              <HStack key={index} alignItems="center">
                <Pressable
                  onPress={() => {
                    console.log('the item selected');
                  }}
                >
                  <Box
                    _light={{ bg: '#34D399' }}
                    _dark={{ bg: '#059669' }}
                    borderRadius="4"
                    h="6"
                    w="6"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      _light={{ color: 'primary.50' }}
                      _dark={{
                        color: 'white',
                      }}
                      fontSize="xs"
                      fontWeight="bold"
                    >
                      {item.seatNumber}
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            );
          }
          return (
            <HStack key={index} alignItems="center">
              <Pressable
                onPress={() => {
                  console.log('the item selected');
                }}
              >
                <Box
                  h="6"
                  w="6"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="4"
                  _light={{ bg: 'coolGray.200' }}
                  _dark={{ bg: 'customGray' }}
                >
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    textAlign="center"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.400' }}
                  >
                    {item.seatNumber}
                  </Text>
                </Box>
              </Pressable>
            </HStack>
          );
        })}
      </HStack>
    </ScrollView>
  );
}
function SeatRowGold(props: SeatRowGoldProps) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <HStack space={{ base: 1, md: 8 }} alignItems="center">
        {props?.data?.map((item, index) => {
          if (item.available) {
            return (
              <HStack key={index} alignItems="center">
                <Pressable
                  onPress={() => {
                    console.log('the item selected');
                  }}
                >
                  <Box
                    borderWidth="1"
                    borderRadius="4"
                    h="6"
                    w="6"
                    alignItems="center"
                    justifyContent="center"
                    _light={{ borderColor: 'coolGray.500', bg: 'white' }}
                    _dark={{
                      borderColor: 'coolGray.700',
                      bg: { base: 'coolGray.800', md: 'coolGray.900' },
                    }}
                  >
                    <Text
                      _light={{ color: 'coolGray.500' }}
                      _dark={{
                        color: 'coolGray.50',
                      }}
                      fontSize="xs"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {item.seatNumber}
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            );
          }
          if (item.selected) {
            return (
              <HStack key={index} alignItems="center">
                <Pressable
                  onPress={() => {
                    console.log('the item selected');
                  }}
                >
                  <Box
                    _light={{ bg: '#34D399' }}
                    _dark={{ bg: '#059669' }}
                    borderRadius="4"
                    h="6"
                    w="6"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      _light={{ color: 'primary.50' }}
                      _dark={{
                        color: 'white',
                      }}
                      fontSize="xs"
                      fontWeight="bold"
                    >
                      {item.seatNumber}
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            );
          }
          return (
            <HStack key={index} alignItems="center">
              <Pressable
                onPress={() => {
                  console.log('the item selected');
                }}
              >
                <Box
                  h="6"
                  w="6"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="4"
                  _light={{ bg: 'coolGray.200' }}
                  _dark={{ bg: 'customGray' }}
                >
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    textAlign="center"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.400' }}
                  >
                    {item.seatNumber}
                  </Text>
                </Box>
              </Pressable>
            </HStack>
          );
        })}
        <Box
          w={{ base: 6, md: 10 }}
          h={{ base: 6, md: 10 }}
          mr={{ base: 1, md: 4 }}
        />
      </HStack>
    </ScrollView>
  );
}
function SeatRowGold2(props: SeatRowGoldTwoProps) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <HStack space={{ base: 1, md: 8 }} alignItems="center">
        {props?.data?.map((item, index) => {
          if (item.available) {
            return (
              <HStack key={index} alignItems="center">
                <Pressable
                  onPress={() => {
                    console.log('the item selected');
                  }}
                >
                  <Box
                    borderWidth="1"
                    borderRadius="4"
                    h="6"
                    w="6"
                    alignItems="center"
                    justifyContent="center"
                    _light={{ borderColor: 'coolGray.500', bg: 'white' }}
                    _dark={{
                      borderColor: 'coolGray.700',
                      bg: { base: 'coolGray.800', md: 'coolGray.900' },
                    }}
                  >
                    <Text
                      _light={{ color: 'coolGray.500' }}
                      _dark={{
                        color: 'coolGray.50',
                      }}
                      fontSize="xs"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {item.seatNumber}
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            );
          }
          if (item.selected) {
            return (
              <HStack key={index} alignItems="center">
                <Pressable
                  onPress={() => {
                    console.log('the item selected');
                  }}
                >
                  <Box
                    _light={{ bg: '#34D399' }}
                    _dark={{ bg: '#059669' }}
                    borderRadius="4"
                    h="6"
                    w="6"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      _light={{ color: 'primary.50' }}
                      _dark={{
                        color: 'white',
                      }}
                      fontSize="xs"
                      fontWeight="bold"
                    >
                      {item.seatNumber}
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            );
          }
          return (
            <HStack key={index} alignItems="center">
              <Pressable
                onPress={() => {
                  console.log('the item selected');
                }}
              >
                <Box
                  h="6"
                  w="6"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="4"
                  _light={{ bg: 'coolGray.200' }}
                  _dark={{ bg: 'customGray' }}
                >
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    textAlign="center"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.400' }}
                  >
                    {item.seatNumber}
                  </Text>
                </Box>
              </Pressable>
            </HStack>
          );
        })}
      </HStack>
    </ScrollView>
  );
}

export default function SeatSelection() {
  return (
    <DashboardLayout displaySidebar={false} title="Seat Selection">
      <VStack
        px={{ base: 4, md: 32 }}
        py={{ base: 4, md: 4 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        borderWidth="1"
        space={4}
        alignItems="center"
      >
        <VStack
          _light={{ bg: 'white' }}
          _dark={{ bg: { md: 'coolGray.900', base: 'coolGray.800' } }}
          alignItems="center"
        >
          <Box mt="5" w="100%" borderColor="#06B6D4" alignItems="center">
            <Svg
              //@ts-ignore
              tabIndex="-1"
              width="294.064"
              height="23.541"
              viewBox="0 0 294.064 23.541"
            >
              <Path
                //@ts-ignore
                tabIndex="-1"
                id="Path_79347"
                data-name="Path 79347"
                d="M0-4.631s70.439-18,142.439-18S288-4.631,288-4.631"
                transform="translate(3.041 25.131)"
                fill="none"
                stroke="#06b6d4"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </Svg>

            <Text
              textAlign="center"
              fontSize="sm"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.200' }}
            >
              SCREEN
            </Text>
          </Box>
          <VStack mt="12" space={{ base: 1, md: 5 }}>
            <Text
              pl={{ base: 6, md: 0 }}
              mb="2"
              fontSize="xs"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              SILVER. RS 250
            </Text>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  A
                </Text>
              </Box>
              <SeatRow data={silverRow1} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  B
                </Text>
              </Box>
              <SeatRow data={list} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  C
                </Text>
              </Box>
              <SeatRow data={list} />
            </HStack>
          </VStack>
          <Divider
            h="1px"
            w="100%"
            _light={{ bgColor: '#F7F7F7' }}
            _dark={{ bgColor: 'coolGray.700' }}
            mt="4"
          />
          <VStack mt="2" space={{ base: 1, md: 5 }}>
            <Text
              pl={{ base: 6, md: 0 }}
              mb="2"
              fontSize="xs"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              GOLD. RS 350
            </Text>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  D
                </Text>
              </Box>
              <SeatRowGold data={listGold1} />
              <SeatRowGold2 data={goldRow2} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  E
                </Text>
              </Box>
              <SeatRowGold data={listGold1} />
              <SeatRowGold2 data={listGold2} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  F
                </Text>
              </Box>
              <SeatRowGold data={listGold1} />
              <SeatRowGold2 data={listGold2} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  G
                </Text>
              </Box>
              <SeatRowGold data={goldRow1} />
              <SeatRowGold2 data={listGold2} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  H
                </Text>
              </Box>
              <SeatRowGold data={listGold1} />
              <SeatRowGold2 data={listGold2} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  I
                </Text>
              </Box>
              <SeatRowGold data={listGold1} />
              <SeatRowGold2 data={listGold2} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  J
                </Text>
              </Box>
              <SeatRowGold data={listGold1} />
              <SeatRowGold2 data={listGold2} />
            </HStack>
          </VStack>
          <Divider
            h="1px"
            w="100%"
            _light={{ bgColor: '#F7F7F7' }}
            _dark={{ bgColor: 'coolGray.700' }}
            mt="4"
          />
          <VStack mt="2" space={{ base: 1, md: 5 }}>
            <Text
              pl={{ base: 6, md: 0 }}
              mb="2"
              fontSize="xs"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              PLATINUM. RS 450
            </Text>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  K
                </Text>
              </Box>
              <SeatRow data={list} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  L
                </Text>
              </Box>
              <SeatRow data={platinumRow2} />
            </HStack>
            <HStack alignItems="center">
              <Box
                w="3"
                h="4"
                mr={{ base: 3, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  M
                </Text>
              </Box>
              <SeatRow data={list} />
            </HStack>
          </VStack>
        </VStack>
        <HStack
          px="7"
          space={4}
          mt="5"
          mx="auto"
          pt={{ md: 4 }}
          pb={{ base: 4, md: 12 }}
        >
          <HStack space={2}>
            <Box
              w="4"
              h="4"
              borderWidth="1"
              borderRadius="4"
              _light={{ borderColor: 'coolGray.500', bg: 'coolGray.50' }}
              _dark={{
                borderColor: 'coolGray.700',
                bg: { base: 'coolGray.800', md: 'coolGray.900' },
              }}
            />
            <Text
              fontSize="xs"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            >
              Available
            </Text>
          </HStack>
          <HStack space={2}>
            <Box
              w="4"
              h="4"
              borderRadius="4"
              _light={{ bg: 'coolGray.200' }}
              _dark={{ bg: 'customGray' }}
            />
            <Text
              fontSize="xs"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            >
              Blocked Seats
            </Text>
          </HStack>
          <HStack space={2}>
            <Box w="4" h="4" borderRadius="4" bg="#34D399" />
            <Text
              fontSize="xs"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            >
              Selected Seats
            </Text>
          </HStack>
        </HStack>
        <Box
          width="100%"
          mt="auto"
          mx="auto"
          pb={{ base: 0, md: 8 }}
          px={{ base: 4, md: 0 }}
          safeAreaBottom
        >
          <Button
            borderRadius="4"
            width="98%"
            py="3"
            _light={{ _pressed: { bg: 'primary.700' }, bg: 'primary.900' }}
            _dark={{ _pressed: { bg: 'primary.500' }, bg: 'primary.700' }}
            onPress={() =>
              console.log('pair your device with help of this button')
            }
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
              letterSpacing: '0.6',
              color: 'coolGray.50',
            }}
          >
            Checkout (RS 900)
          </Button>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
