import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import type { DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {
  Button,
  Box,
  Center,
  Pressable,
  Heading,
  VStack,
  Hidden,
  Text,
  HStack,
  Divider,
  Avatar,
  Icon,
} from 'native-base';

const Drawer = createDrawerNavigator();

type DrawerNavigationParamList = {
  Component: undefined;
};
type Props = DrawerScreenProps<DrawerNavigationParamList, 'Component'>;

function Component(props: Props) {
  return (
    <Center
      flex={1}
      _light={{ bg: 'white', borderRightColor: 'coolGray.200' }}
      _dark={{ bg: 'coolGray.900', borderRightColor: 'coolGray.800' }}
    >
      <Heading size="md">{props.route.name} Screen</Heading>
      <Button
        colorScheme="primary"
        mt="4"
        onPress={() => props.navigation.toggleDrawer()}
      >
        Open Drawer
      </Button>
    </Center>
  );
}

const getIcon = (screenName: string) => {
  switch (screenName) {
    case 'Contacts':
      return 'account';
    case 'Groups':
      return 'account-group';
    case 'Notications':
      return 'bell';
    case 'Orders':
      return 'shopping';
    case 'Settings':
      return 'cog';
    case 'Privacy policies':
      return 'shield-search';
    case 'Help & Support':
      return 'headset';
    case 'Refer & Earn':
      return 'share-variant';
    case 'Logout':
      return 'logout';
    default:
      return undefined;
  }
};

type NavigationItemProps = {
  name: string;
  index: number;
} & DrawerContentComponentProps;

const NavigationItem = ({ name, index, ...props }: NavigationItemProps) => (
  <Pressable
    px="5"
    py="4"
    rounded="md"
    _dark={{
      bg: {
        base:
          index === props.state.index ? 'coolGray.50:alpha.80' : 'transparent',
        md:
          index === props.state.index ? 'coolGray.400:alpha.80' : 'transparent',
      },
    }}
    _light={{
      bg: index === props.state.index ? 'primary.800:alpha.10' : 'transparent',
    }}
    onPress={() => {
      props.navigation.navigate(name);
    }}
  >
    <HStack space="7" alignItems="center">
      <Icon
        _light={{
          color: index === props.state.index ? 'primary.900' : 'gray.500',
        }}
        _dark={{
          color: index === props.state.index ? 'primary.900' : 'white',
        }}
        size="5"
        as={MaterialCommunityIcons}
        name={getIcon(name)}
      />
      <Text
        fontWeight={index === props.state.index ? 'bold' : 'medium'}
        _light={{
          color: index === props.state.index ? 'primary.900' : 'gray.500',
        }}
        _dark={{
          color: index === props.state.index ? 'primary.900' : 'white',
        }}
      >
        {name}
      </Text>
    </HStack>
  </Pressable>
);

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingTop: 0,
        width: '100%',
        flex: 1,
      }}
      {...props}
    >
      <Box _light={{ bg: 'primary.900' }} _dark={{ bg: 'coolGray.900' }} />
      <VStack
        p="4"
        space="6"
        alignItems="center"
        borderBottomWidth="1"
        _light={{
          borderBottomColor: 'coolGray.200',
          bg: { base: 'primary.900', md: 'white' },
        }}
        _dark={{
          borderBottomColor: 'coolGray.800',
          bg: 'coolGray.900',
        }}
      >
        <Avatar
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          width={{ base: 20, md: 40 }}
          height={{ base: 20, md: 40 }}
        />
        <Center>
          <HStack space="2" alignItems="center">
            <Text
              fontWeight="bold"
              fontSize="xl"
              _light={{
                color: { base: 'white', md: 'coolGray.700' },
              }}
              _dark={{
                color: { base: 'coolGray.300', md: 'coolGray.50' },
              }}
            >
              Jane Does
            </Text>
            <Hidden from="md">
              <Icon
                _light={{
                  color: 'gray.50',
                }}
                _dark={{
                  color: 'white',
                }}
                size="5"
                as={MaterialIcons}
                name="edit"
              />
            </Hidden>
          </HStack>
          <Text
            fontWeight="medium"
            textAlign="center"
            _light={{
              color: { base: 'coolGray.300', md: 'coolGray.500' },
            }}
            _dark={{
              color: { base: 'coolGray.300', md: 'coolGray.300' },
            }}
          >
            janedoe2@mydomain.com
          </Text>
        </Center>

        <Hidden from="md">
          <HStack
            justifyContent="center"
            pb="3"
            space="2"
            divider={<Divider bg="primary.300" />}
          >
            <Text
              fontSize="sm"
              _light={{ color: 'white' }}
              _dark={{ color: 'white' }}
            >
              188 Following
            </Text>
            <Text
              fontSize="sm"
              _light={{ color: 'white' }}
              _dark={{ color: 'white' }}
            >
              1088 Followers
            </Text>
          </HStack>
        </Hidden>
      </VStack>
      <Box
        justifyContent={{ base: 'flex-start', md: 'space-between' }}
        _light={{ bg: 'white' }}
        _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        flexGrow={1}
      >
        <VStack mt={2}>
          {props.state.routeNames.map((name: string, index: number) => (
            <React.Fragment key={index}>
              <NavigationItem name={name} index={index} {...props} />
            </React.Fragment>
          ))}
        </VStack>
        <Box marginTop="auto" safeAreaBottom>
          <Divider my="2" _dark={{ bgColor: 'coolGray.500' }} />
          <NavigationItem
            name="Logout"
            index={props.state.routeNames.length}
            {...props}
          />
        </Box>
      </Box>
    </DrawerContentScrollView>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Contacts" component={Component} />
        <Drawer.Screen name="Groups" component={Component} />
        <Drawer.Screen name="Notications" component={Component} />
        <Drawer.Screen name="Orders" component={Component} />
        <Drawer.Screen name="Settings" component={Component} />
        <Drawer.Screen name="Privacy policies" component={Component} />
        <Drawer.Screen name="Help & Support" component={Component} />
        <Drawer.Screen name="Refer & Earn" component={Component} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
