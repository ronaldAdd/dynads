import React from 'react';
import {
  Text,
  VStack,
  Image,
  Center,
  useBreakpointValue,
  FlatList,
  Pressable,
  Box,
  Icon,
  Button,
  HStack,
  Hidden,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import { AntDesign } from '@expo/vector-icons';

type List = {
  imageUri?: object;
  iconName?: string;
  color?: string;
};
type ListProps = {
  item: List;
};
const list: List[] = [
  {
    imageUri: null,
    iconName: 'upload',
    color: 'primary.700',
  },
  {
    imageUri: require('../../assets/young-girl.jpg'),
    iconName: 'checkcircle',
    color: 'white',
  },
  {
    imageUri: require('../../assets/nice-girl.jpg'),

    color: '#4C1D95',
  },
  {
    imageUri: require('../../assets/man.jpg'),
  },
  {
    imageUri: require('../../assets/beard.jpg'),

    color: '#4C1D95',
  },
  {
    imageUri: require('../../assets/asian.jpg'),
  },
];

function Photo(props: ListProps) {
  return (
    <Pressable
      onPress={() => {
        console.log('object');
      }}
    >
      <Center
        position="relative"
        w={{ md: 40, base: 24 }}
        h={{ base: 24, md: 64 }}
        m={{ md: 4, base: 3 }}
      >
        {props.item.imageUri ? (
          <Image
            position="absolute"
            zIndex={-1}
            w={{ md: 40, base: 24 }}
            h={{ base: 24, md: 64 }}
            rounded={4}
            source={props.item.imageUri}
            alt="Alternet Text"
            blurRadius={props.item.iconName === 'checkcircle' ? 6 : 0}
          />
        ) : (
          <Box
            position="absolute"
            zIndex={-1}
            w={{ md: 40, base: 24 }}
            h={{ base: 24, md: 64 }}
            rounded={4}
            _dark={{ bg: { base: 'customGray', md: 'customGray' } }}
            bg={{ base: 'primary.50' }}
          />
        )}
        <Center>
          <Icon
            as={AntDesign}
            name={props.item.iconName}
            size="md"
            color={props.item.color}
          />
          {props.item.imageUri ? (
            <Hidden from="base" till="md">
              <Text
                mt="2"
                fontSize={{ md: 'sm', base: 'xs' }}
                _dark={{ color: { base: 'coolGray.800', md: 'coolGray.50' } }}
                _light={{ color: 'coolGray.800' }}
              >
                Upload Photo
              </Text>
            </Hidden>
          ) : null}
        </Center>
      </Center>
    </Pressable>
  );
}

export default function ImagePicker() {
  const noColumn = useBreakpointValue({
    base: 3,
    lg: 4,
    md: 3,
    xl: 5,
  });

  return (
    <>
      <DashboardLayout
        displaySidebar={false}
        displayScreenTitle={false}
        title="Choose Image"
      >
        <HStack
          justifyContent={{ md: 'space-between' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white', md: 'primary.50' },
          }}
          borderBottomWidth={{ base: 1, md: 0 }}
          _dark={{
            borderColor: 'coolGray.600',
            bg: { md: 'coolGray.700', base: 'coolGray.800' },
          }}
          pb="4"
          pt={{ base: 4, md: 0 }}
          alignItems="center"
        >
          <Hidden till="md">
            <HStack space={2} alignItems="center">
              <Pressable>
                <Icon
                  size="6"
                  as={AntDesign}
                  name={'arrowleft'}
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                />
              </Pressable>
              <Text
                fontSize="lg"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
              >
                Choose Image
              </Text>
            </HStack>
          </Hidden>
          <HStack alignItems="center" space={2} ml={{ base: 4, md: 0 }}>
            <Text
              fontSize="lg"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
            >
              Recents
            </Text>
            <Pressable>
              <Icon
                size="4"
                as={AntDesign}
                name={'down'}
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              />
            </Pressable>
          </HStack>
        </HStack>

        <VStack
          px={{ base: 4, md: 4 }}
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
          <FlatList
            numColumns={noColumn}
            data={list}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }: { item: List }) => <Photo item={item} />}
            key={noColumn}
          />
          <Button
            mt={{ base: '300px', md: 0 }}
            mb={{ base: 0, md: 2 }}
            width="95%"
            mx={{ base: 4, md: 4 }}
            borderRadius="4"
            py="3"
            bg="primary.900"
            onPress={() => console.log('hello world')}
            _text={{
              fontSize: 'md',
              fontWeight: 'medium',
              letterSpacing: '1',
            }}
          >
            CONTINUE
          </Button>
        </VStack>
      </DashboardLayout>
    </>
  );
}
