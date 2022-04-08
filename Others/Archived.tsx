import React from 'react';
import {
  Text,
  VStack,
  Image,
  useColorMode,
  Center,
  useBreakpointValue,
  FlatList,
} from 'native-base';
import type { ImageSourcePropType } from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';

type ImageList = {
  imageResLight: ImageSourcePropType;
  imageResDark: ImageSourcePropType;
};
type ImageListProps = {
  item: ImageList;
};
const imageList: ImageList[] = [
  {
    imageResLight: require('./components/lightMode.jpg'),
    imageResDark: require('./components/darkMode.jpeg'),
  },
  {
    imageResLight: require('./components/lightMode2.jpg'),
    imageResDark: require('./components/darkMode2.jpg'),
  },
  {
    imageResLight: require('./components/lightMode3.jpg'),
    imageResDark: require('./components/darkMode3.jpg'),
  },
  {
    imageResLight: require('./components/lightMode4.jpg'),
    imageResDark: require('./components/darkMode4.jpg'),
  },
  {
    imageResLight: require('./components/lightMode3.jpg'),
    imageResDark: require('./components/darkMode.jpeg'),
  },
  {
    imageResLight: require('./components/lightMode2.jpg'),
    imageResDark: require('./components/darkMode2.jpg'),
  },
  {
    imageResLight: require('./components/lightMode.jpg'),
    imageResDark: require('./components/darkMode3.jpg'),
  },
  {
    imageResLight: require('./components/lightMode2.jpg'),
    imageResDark: require('./components/darkMode4.jpg'),
  },
  {
    imageResLight: require('./components/lightMode3.jpg'),
    imageResDark: require('./components/darkMode.jpeg'),
  },
  {
    imageResLight: require('./components/lightMode2.jpg'),
    imageResDark: require('./components/darkMode2.jpg'),
  },
  {
    imageResLight: require('./components/lightMode.jpg'),
    imageResDark: require('./components/darkMode3.jpg'),
  },
  {
    imageResLight: require('./components/lightMode2.jpg'),
    imageResDark: require('./components/darkMode4.jpg'),
  },
  {
    imageResLight: require('./components/lightMode3.jpg'),
    imageResDark: require('./components/darkMode.jpeg'),
  },
];
function Card(props: ImageListProps) {
  const { colorMode } = useColorMode();
  return (
    <>
      {colorMode === 'dark' ? (
        <Image
          m={{ base: 2, md: 4 }}
          source={props.item.imageResDark}
          width={{ base: 40, md: 48 }}
          height="56"
          borderRadius="10"
          alt="feed iamge"
        />
      ) : (
        <Image
          m={{ base: 2, md: 4 }}
          source={props.item.imageResLight}
          width={{ base: 40, md: 48 }}
          height="56"
          borderRadius="10"
          alt="feed iamge"
        />
      )}
    </>
  );
}

export default function Archived() {
  const noColumn = useBreakpointValue({
    base: 2,
    lg: 4,
    md: 3,
    xl: 4,
  });

  return (
    <DashboardLayout displaySidebar={false} title="Archived">
      <Center
        width="100%"
        display={{ md: 'none' }}
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: 'customGray' }}
      >
        <Text
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.300' }}
          fontSize="sm"
          fontWeight="medium"
          my="4"
          display={{ md: 'none' }}
        >
          Only you can see the posts you’ve archived
        </Text>
      </Center>
      <VStack
        px={{ base: 4, md: 8 }}
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
        borderWidth="1"
        alignItems="center"
      >
        <FlatList
          width="100%"
          contentContainerStyle={{
            alignItems: 'center',
          }}
          numColumns={noColumn}
          data={imageList}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }: { item: ImageList }) => <Card item={item} />}
          key={noColumn}
        />
      </VStack>
    </DashboardLayout>
  );
}
