import React from 'react';
import { Text, VStack, Button, useColorMode, Center } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconBluetooth from './components/IconBluetooth';
import IconBluetoothDark from './components/IconBluetoothDark';

export default function BluetoothPairing() {
  const { colorMode } = useColorMode();
  return (
    <DashboardLayout displaySidebar={false} title="Bluetooth Pairing">
      <VStack
        px={{ base: 4, md: 32 }}
        py={{ base: 4, md: 4 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'coolGray.50' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.800', base: 'coolGray.800' },
        }}
        borderWidth="1"
        space={4}
        flex={1}
        alignItems="center"
      >
        <Center mt={{ base: 5, md: 8 }}>
          {colorMode === 'dark' ? <IconBluetoothDark /> : <IconBluetooth />}
        </Center>

        <Text
          mt="16"
          fontSize="xl"
          textAlign="center"
          fontWeight="bold"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Let’s pair with other devices?
        </Text>
        <Text
          mt={{ base: 4, md: 0 }}
          fontSize="sm"
          textAlign="center"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.300' }}
          px={{ base: 0, md: 32 }}
        >
          Turn on your Bluetooth connection settings and get ready to connect
          with other nearby devices. It is going to take only few seconds.
        </Text>

        <Button
          w="100%"
          mt={{ base: 'auto', md: 32 }}
          mb={{ md: 4 }}
          borderRadius="4"
          _dark={{
            bg: 'primary.700',
            _focus: { bg: 'primary.700' },
            _pressed: { bg: 'primary.500' },
          }}
          _light={{ bg: 'primary.900', _focus: { bg: 'primary.900' } }}
          _text={{ fontSize: 'sm', fontWeight: 'medium' }}
          onPress={() =>
            console.log('pair your device with help of this button')
          }
        >
          PAIR DEVICE
        </Button>
      </VStack>
    </DashboardLayout>
  );
}
