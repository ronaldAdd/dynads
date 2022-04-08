import React from 'react';
import {
  Text,
  VStack,
  Image,
  Center,
  useBreakpointValue,
  FlatList,
  useColorModeValue,
  Pressable,
  Box,
  Button,
  HStack,
  Stack,
  Icon,
  ScrollView,
  Slider,
  Hidden,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

type List = {
  itemName: string;
  selected?: boolean;
  colors: string[];
  imageUri: object;
};
type CardProps = {
  item: List;
  type: string;
  onClick: () => void;
  key: number;
  filterName: string;
  setFilterName: (a: string) => void;
  showProgress: boolean;
};
const list: List[] = [
  {
    itemName: 'Original',
    selected: false,
    colors: ['lightBlue.300', 'violet.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Fresh',
    selected: true,
    colors: ['rose.300', 'rose.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Clear',
    selected: false,
    colors: ['teal.300', 'teal.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Warm',
    selected: false,
    colors: ['emerald.300', 'emerald.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Film',
    selected: false,
    colors: ['yellow.300', 'yellow.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Modern Gold',
    selected: false,
    colors: ['lightBlue.300', 'violet.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Cool',
    selected: false,
    colors: ['rose.300', 'rose.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Vintage',
    selected: false,
    colors: ['teal.300', 'teal.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Fade',
    selected: false,
    colors: ['emerald.300', 'emerald.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Mist',
    selected: false,
    colors: ['yellow.300', 'yellow.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'City',
    selected: false,
    colors: ['lightBlue.300', 'violet.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    itemName: 'Autumn',
    selected: false,
    colors: ['rose.300', 'rose.800'],
    imageUri: require('../../assets/nice-girl.jpg'),
  },
];
function Card(props: CardProps) {
  const primaryText = useColorModeValue('coolGray.800', 'coolGray.200');
  const secondoryText = useColorModeValue('coolGray.500', 'coolGray.300');
  return (
    <Pressable
      onPress={() => {
        props.onClick();
        props.setFilterName(props.item.itemName);
      }}
    >
      <VStack
        alignItems="center"
        space={2}
        mx={props.type === 'Grid' ? 2 : 0}
        my={props.type === 'Grid' ? 1 : 0}
      >
        <Center
          w={{ base: 16, md: 24 }}
          h={{ base: 16, md: 24 }}
          position="relative"
        >
          <Center
            w={{ base: 16, md: 24 }}
            h={{ base: 16, md: 24 }}
            bg={{
              linearGradient: {
                colors: props.item.colors,
                start: [0, 0],
                end: [1, 0],
              },
            }}
            opacity="0.2"
            rounded="lg"
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
              color: 'white',
            }}
            borderWidth={
              props.filterName === props.item.itemName && props.showProgress
                ? '5'
                : '0'
            }
            borderColor="red.400"
          />
          {props.item.selected && (
            <Center
              rounded="lg"
              position="absolute"
              zIndex={2}
              w={{ base: 16, md: 24 }}
              h={{ base: 16, md: 24 }}
            />
          )}

          <Image
            rounded="lg"
            position="absolute"
            zIndex={-1}
            w={{ base: 16, md: 24 }}
            h={{ base: 16, md: 24 }}
            source={props.item.imageUri}
            alt="Alternate Text"
            resizeMode="cover"
          />
        </Center>

        <Text
          fontSize="sm"
          color={props.item.selected ? primaryText : secondoryText}
        >
          {props.item.itemName}
        </Text>
      </VStack>
    </Pressable>
  );
}

export default function PhotoFilters() {
  const noColumn = useBreakpointValue({
    base: 2,
    lg: 4,
    md: 4,
    xl: 4,
  });
  const [filterName, setFilterName] = React.useState('Original');
  const primaryText = useColorModeValue('coolGray.800', 'coolGray.100');
  const [showProgress, setShowProgress] = React.useState(false);
  const [init, setInit] = React.useState(false);

  return (
    <DashboardLayout displaySidebar={false} title="Photo Filters">
      <ScrollView>
        <Stack
          flexDirection={{ base: 'column', md: 'row' }}
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
        >
          <Image
            mr="6"
            width={{ md: '50%', base: '100%' }}
            height={{ base: 400, md: 540 }}
            source={require('../../assets/nice-girl.jpg')}
            alt="Alternate Text"
          />
          <VStack
            width={{ md: '50%', base: '100%' }}
            pb={{ base: 40, md: 0 }}
            flex={1}
          >
            <HStack
              alignItems="center"
              space={2}
              justifyContent={{ base: 'flex-end', md: 'flex-start' }}
              mt={{ base: 4, md: 0 }}
            >
              <Pressable
                onPress={() => {
                  console.log('hello');
                }}
              >
                <Icon size="6" as={MaterialCommunityIcons} name="compare" />
              </Pressable>
              <Box
                _text={{
                  fontSize: 'sm',
                  color: primaryText,
                }}
              >
                Compare
              </Box>
            </HStack>
            {showProgress && filterName !== 'Original' && (
              <Slider
                defaultValue={50}
                mt={{ base: 4, md: 2 }}
                colorScheme="primary.900"
              >
                <Slider.Track
                  _light={{ bg: 'coolGray.200' }}
                  _dark={{ bg: 'coolGray.600' }}
                >
                  <Slider.FilledTrack bg="primary.900" />
                </Slider.Track>
                <Slider.Thumb bg="primary.900" />
              </Slider>
            )}

            <Hidden from="md">
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                mx="-8"
              >
                <HStack
                  mx="8"
                  space={3}
                  mt={
                    showProgress && filterName !== 'Original'
                      ? { md: 2, base: 5 }
                      : { md: 0, base: 12 }
                  }
                  alignItems="center"
                >
                  {list.map((item, index) => {
                    return (
                      <Box key={index}>
                        <Card
                          item={item}
                          type="scroll"
                          onClick={() => {
                            if (!init) {
                              setInit(true);
                            }
                            setShowProgress(!showProgress);
                          }}
                          key={index}
                          filterName={filterName}
                          setFilterName={setFilterName}
                          showProgress={showProgress}
                        />
                      </Box>
                    );
                  })}
                </HStack>
              </ScrollView>
            </Hidden>
            <Hidden till="md">
              <FlatList
                mt={showProgress && filterName !== 'Original' ? 5 : 12}
                numColumns={noColumn}
                data={list}
                ml="-2"
                renderItem={({ item, index }) => (
                  <Card
                    item={item}
                    key={index}
                    type="Grid"
                    onClick={() => {
                      if (!init) {
                        setInit(true);
                      }
                      setShowProgress(!showProgress);
                    }}
                    filterName={filterName}
                    setFilterName={setFilterName}
                    showProgress={showProgress}
                  />
                )}
                key={noColumn}
              />
            </Hidden>
            <HStack
              mt={{ base: 8, md: 20 }}
              alignItems="center"
              justifyContent="space-between"
              display={{ md: 'none', base: 'flex' }}
            >
              <Icon
                size="7"
                as={AntDesign}
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.300' }}
                name={'close'}
              />
              <Text color={primaryText} fontSize="sm">
                {init ? filterName : ''}
              </Text>
              <Icon
                size="7"
                as={AntDesign}
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.300' }}
                name={'check'}
              />
            </HStack>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              display={{ md: 'flex', base: 'none' }}
              space="2"
            >
              <Button
                borderRadius="4"
                borderWidth="1"
                _light={{ borderColor: 'coolGray.400' }}
                _dark={{ borderColor: 'coolGray.400' }}
                variant="outline"
                size="lg"
                py="2"
                _text={{
                  fontSize: 'sm',
                  _light: { color: 'primary.900' },
                  _dark: { color: 'coolGray.400' },
                }}
                flex={0.4}
              >
                Cancel
              </Button>
              <Button
                borderRadius="4"
                flex={0.6}
                size="lg"
                py="2"
                _light={{ bg: 'primary.900' }}
                _dark={{ bg: 'primary.700' }}
                _text={{ fontSize: 'sm', fontWeight: 'normal' }}
              >
                Apply
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </ScrollView>
    </DashboardLayout>
  );
}
