import React from 'react'
import {
    HStack,
    Icon,
    Text,
    VStack,
    Pressable,
    Button,
    Progress,
    Modal,
    Hidden,
    Avatar,    
  } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import IconPassword from './components6/IconPassword';
import IconGeneral from './components6/IconGeneral';
import IconManageAccount from './components6/IconManageAccount';
import IconLanguage from './components6/IconLanguage';
import IconLinkedAccounts from './components6/IconLinkedAccounts';
import IconDisableAccount from './components6/IconDisableAccount';
import DashboardLayout from '../layouts/DashboardLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogOutScreen from '../pages/LogOutScreen';
import UserProfileScreen from '../pages/UserProfileScreen';
const Stack = createNativeStackNavigator();
type Setting = {
    icon: JSX.Element;
    name: string;
    option: string | null;
  };
  
  const settings: Setting[] = [
    {
      icon: <IconPassword size="6" />,
      name: 'Change password',
      option: null,
    },
    {
      icon: <IconGeneral />,
      name: 'General',
      option: null,
    },
    {
      icon: <IconManageAccount />,
      name: 'Manage Accounts',
      option: null,
    },
    {
      icon: <IconLanguage />,
      name: 'Language',
      option: 'English',
    },
    {
      icon: <IconLinkedAccounts />,
      name: 'Linked Accounts',
      option: null,
    },
    {
      icon: <IconDisableAccount />,
      name: 'Sign Out',
      option: null,
    },
  ];

  function StorageComponent() {
    return (
      <VStack
        px="4"
        py="2"
        mt="30"
        mx={{ base: 4, md: 0 }}
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.900' },
          borderColor: 'coolGray.800',
        }}
        borderWidth={{ md: '1' }}
        borderBottomWidth="1"
        borderRadius="6"
      >
        <HStack space="3">
          <Icon
            as={MaterialIcons}
            name="cloud-queue"
            size="6"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          />
          <Text
            fontSize="md"
            fontWeight="medium"
            _dark={{ color: 'coolGray.100' }}
            _light={{ color: 'coolGray.800' }}
          >
            Storage
          </Text>
        </HStack>
        <HStack alignItems="center" space={{ base: 4, md: 10 }}>
          <VStack flex={1}>
            <Progress
              size="sm"
              value={40}
              width="100%"
              rounded="none"
              _light={{
                bg: 'coolGray.100',
              }}
              _dark={{
                bg: 'coolGray.700',
              }}
            />
          </VStack>
          <Button
            size="sm"
            borderRadius="4"
            variant="outline"
            _light={{ borderColor: 'primary.900' }}
            _dark={{ borderColor: 'coolGray.400' }}
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
              _light: { color: 'primary.900' },
              _dark: { color: 'coolGray.400' },
            }}
          >
            Buy Storage
          </Button>
        </HStack>
        <Text
          fontSize="xs"
          fontWeight="medium"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.300' }}
        >
          4 GB of 15 GB used
        </Text>
      </VStack>
    );
  }

function components(props){
console.log(props)
}

function HomeScreen(){
    // return(
    //     <div>Home setting</div>
    // )
    return (
        <>
          <DashboardLayout title="Settings">
            <VStack
              _light={{
                borderColor: 'coolGray.200',
                bg: 'primary.900',
              }}
              _dark={{
                borderColor: 'coolGray.800',
                bg: { base: 'coolGray.800', md: 'coolGray.900' },
              }}
              borderWidth={{ md: '1' }}
              borderBottomWidth="1"
              borderRadius={{ md: '8' }}
              px={{ base: 4, md: 8 }}
              py={{ base: 4, md: 6 }}
            >
              <Pressable
                borderRadius={{ md: 4 }}
                onPress={() => {
                  console.log('pressable pressed' );
                }}
              >
                {settings.map((item, index) => {
                  return (
                    <HStack justifyContent="space-between" my="3" key={index}>
                      <HStack space="3" alignItems="center">
                        {item.icon}
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          _dark={{ color: 'coolGray.100' }}
                          _light={{ color: 'coolGray.800' }}
                        //   onPress={()=> {
                        //     components(index)                            
                        // }}
                        onPress={()=>navigation.navigate('Detail', { name: item.name })}    
                        >
                          {item.name}
                        </Text>
                      </HStack>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        _dark={{ color: 'coolGray.400' }}
                        _light={{ color: 'coolGray.500' }}
                      >
                        {item.option}
                      </Text>
                    </HStack>
                  );
                })}
              </Pressable>
            </VStack>
            <StorageComponent />
          </DashboardLayout>
        </>
      )    
}


const DetailScreen=({ navigation, route }) =>{
return(
    <div>{route.params.name}</div>
)
}


const SignOutScreen=({ navigation, route }) =>{
    const [modalVisible, setModalVisible] = React.useState(true);
    return(
        // <div>Sign Out{route.params.name}</div>
        <Modal isOpen={modalVisible} onClose={setModalVisible}>
        <Modal.Content _light={{ bg: 'white' }} _dark={{ bg: 'coolGray.700' }}>
          <Modal.Body>
            <VStack
              space="4"
              justifyContent="center"
              alignItems="center"
              px="4"
              py="4"
            >
              <Hidden from="base" till="md">
                <Modal.CloseButton />
              </Hidden>
              <Avatar
                source={require('../assets/women.jpg')}
                w="20"
                h="20"
              />
              <Text textAlign="center">
                Are you sure you want to sign out your account?
              </Text>
              <HStack space="2" w="100%" justifyContent="center">
                <Button
                  onPress={() => setModalVisible(false)}
                  flex={1}
                  size="sm"
                  borderRadius="4"
                  variant="outline"
                  borderColor="coolGray.400"
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'coolGray.400',
                  }}
                >
                  NO
                </Button>
                <Button
                  onPress={() => signOut(auth)}
                  flex={1}
                  size="sm"
                  borderRadius="4"
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  _light={{
                    bg: 'primary.900',
                  }}
                  _dark={{
                    bg: 'primary.700',
                    _pressed: { bg: 'primary.500' },
                  }}
                >
                  YES
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    )
    }

function AccountMainScreen({ navigation }){
    // return(
    //     <div><Button onPress={()=>navigation.navigate('Detail', { name: 'item.name' })} >button</Button></div>
    // )
    return (
        <>
          {/* <DashboardLayout title="Settings"> */}
            <VStack
              _light={{
                borderColor: 'coolGray.200',
                bg: 'white',
              }}
              _dark={{
                borderColor: 'coolGray.800',
                bg: { base: 'coolGray.800', md: 'coolGray.900' },
              }}
              borderWidth={{ md: '1' }}
              borderBottomWidth="1"
              borderRadius={{ md: '8' }}
              px={{ base: 4, md: 8 }}
              py={{ base: 4, md: 6 }}
            >
              <Pressable
                borderRadius={{ md: 4 }}
                onPress={() => {
                  console.log('pressable pressed' );
                }}
              >
                {settings.map((item, index) => {
                  return (
                    <HStack justifyContent="space-between" my="3" key={index}>
                      <HStack space="3" alignItems="center">
                        {item.icon}
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          _dark={{ color: 'coolGray.100' }}
                          _light={{ color: 'coolGray.800' }}
                        //   onPress={()=> {
                        //     components(index)                            
                        // }}
                        onPress={()=>navigation.navigate(item.name, { name: item.name })}    
                        >
                          {item.name}
                        </Text>
                      </HStack>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        _dark={{ color: 'coolGray.400' }}
                        _light={{ color: 'coolGray.500' }}
                      >
                        {item.option}
                      </Text>
                    </HStack>
                  );
                })}
              </Pressable>
            </VStack>
            {/* <StorageComponent /> */}
          {/* </DashboardLayout> */}
        </>
      )    
    }
    
function AccountScreen({navigation}){
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={AccountMainScreen}
            options={{ title: 'Welcome',headerShown:false }}
          />
      <Stack.Screen
        name="Change password"
        component={DetailScreen}
      />
      <Stack.Screen
        name="General"
        component={DetailScreen}
      />
      <Stack.Screen
        name="Manage Accounts"
        component={UserProfileScreen}
      />
      <Stack.Screen
        name="Language"
        component={DetailScreen}
      />
      <Stack.Screen
        name="Linked Accounts"
        component={DetailScreen}
      />
      <Stack.Screen
        name="Sign Out"
        component={LogOutScreen}
      />
        </Stack.Navigator>
    )    
}


function AccountScreenOld() {
//   return (
//     <div>AccountScreen</div>
//   )
return (
    <>
      {/* <DashboardLayout title="Settings"> */}
        <VStack
          _light={{
            borderColor: 'coolGray.200',
            bg: 'white',
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { base: 'coolGray.800', md: 'coolGray.900' },
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          borderRadius={{ md: '8' }}
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 6 }}
        >
          <Pressable
            borderRadius={{ md: 4 }}
            onPress={() => {
              console.log('pressable pressed' );
            }}
          >
            {settings.map((item, index) => {
              return (
                <HStack justifyContent="space-between" my="3" key={index}>
                  <HStack space="3" alignItems="center">
                    {item.icon}
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      _dark={{ color: 'coolGray.100' }}
                      _light={{ color: 'coolGray.800' }}
                      onPress={()=> {
                        components(index)
                    }}

                    >
                      {item.name}
                    </Text>
                  </HStack>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.400' }}
                    _light={{ color: 'coolGray.500' }}
                  >
                    {item.option}
                  </Text>
                </HStack>
              );
            })}
          </Pressable>
        </VStack>
        <StorageComponent />
      {/* </DashboardLayout> */}
    </>
  )

}

export default AccountScreen