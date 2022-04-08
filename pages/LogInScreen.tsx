import React, {useState} from 'react'
import {
  Button,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
  Image,
  useColorModeValue,
  IconButton,
  Icon,
  Pressable,
  Center,
  Hidden,
} from 'native-base';
import { AntDesign, Entypo } from '@expo/vector-icons';
import IconGoogle from '../pages/components2/IconGoogle';
import IconFacebook from '../pages/components2/IconFacebook';
import FloatingLabelInput from '../pages/components3/FloatingLabelInput';
// import GuestLayout from '../../layouts/GuestLayout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase-config'
const auth = getAuth(app);


function LoginScreen() {
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = React.useState(false);

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const handleLogin = async ()=>{
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        if(result) console.log('SUCCESSp');
    }
    catch(error){
        console.log(error)
    }
}


  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        px="6"
        py="9"
        flex="1"
        space="3"
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        justifyContent="space-between"
        borderTopLeftRadius={{ base: '2xl', md: '0' }}
        borderTopRightRadius={{ base: '2xl', md: 'xl' }}
        borderBottomRightRadius={{ base: '0', md: 'xl' }}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal" letterSpacing="1">
              Sign in to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="3">
              <VStack space="4">
                <FloatingLabelInput
                  py="3"
                  isRequired
                  label="Email"
                  labelColor="#9CA3AF"
                  labelBGColor={useColorModeValue('#fff', '#1F2937')}
                  borderRadius="4"
                  defaultValue={text}
                  onChangeText={(text) => setEmail(text)}
                  fontWeight="semibold"
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                  }}
                  _dark={{
                    borderColor: 'coolGray.700',
                  }}
                  _light={{
                    borderColor: 'coolGray.300',
                  }}
                />
                <FloatingLabelInput
                  py="3"
                  isRequired
                  type={showPass ? '' : 'password'}
                  label="Password"
                  borderRadius="4"
                  labelColor="#9CA3AF"
                  labelBGColor={useColorModeValue('#fff', '#1F2937')}
                  defaultValue={pass}
                  onChangeText={(text) => setPassword(text)}
                  fontWeight="semibold"
                  InputRightElement={
                    <IconButton
                      mr="1"
                      variant="unstyled"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showPass ? 'eye' : 'eye-with-line'}
                        />
                      }
                      onPress={() => {
                        setShowPass(!showPass);
                      }}
                    />
                  }
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  _dark={{
                    borderColor: 'coolGray.700',
                  }}
                  _light={{
                    borderColor: 'coolGray.300',
                  }}
                />
              </VStack>
              <Link
                onPress={() => console.log('Pressed')}
                ml="auto"
                _text={{
                  fontSize: 'xs',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
                _light={{
                  _text: {
                    color: 'primary.900',
                  },
                }}
                _dark={{
                  _text: {
                    color: 'primary.700',
                  },
                }}
              >
                Forgot password?
              </Link>
              <Checkbox
                _dark={{
                  value: 'checkbox',
                  _checked: {
                    value: 'checkbox',
                    bg: 'primary.700',
                    borderColor: 'primary.700',
                    _icon: { color: 'white' },
                  },
                }}
                _light={{
                  value: 'checkbox',
                  _checked: {
                    value: 'checkbox',
                    bg: 'primary.900',
                    borderColor: 'primary.900',
                  },
                }}
                mt="5"
                defaultIsChecked
                value="demo"
                accessibilityLabel="Remember me"
              >
                <Text
                  pl="3"
                  fontWeight="normal"
                  letterSpacing="0.3"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  Remember me and keep me logged in
                </Text>
              </Checkbox>
              <Button
                onPress={()=>handleLogin()}
                mt="5"
                size="md"
                py="3"
                borderRadius="4"
                _text={{
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
                SIGN IN
              </Button>
              <HStack
                mt="5"
                space="2"
                mb={{ base: 6, md: 7 }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{ bg: { base: 'coolGray.300', md: 'coolGray.200' } }}
                  _dark={{ bg: 'coolGray.700' }}
                />
                <Text
                  fontWeight="medium"
                  color={{ base: 'coolGray.500', md: 'coolGray.300' }}
                  _light={{
                    color: { base: 'coolGray.500', md: 'coolGray.300' },
                  }}
                  _dark={{
                    color: { base: 'coolGray.500', md: 'coolGray.300' },
                  }}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{ bg: { base: 'coolGray.300', md: 'coolGray.200' } }}
                  _dark={{ bg: 'coolGray.700' }}
                />
              </HStack>
            </VStack>
            <Center>
              <HStack space="4">
                <Pressable onPress={() => console.log('Pressed')}>
                  <IconFacebook />
                </Pressable>
                <Pressable onPress={() => console.log('Pressed')}>
                  <IconGoogle />
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
        <HStack
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{ base: 'auto', md: '8' }}
        >
          <Text
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Don't have an account?
          </Text>
          <Link
            onPress={() => console.log('Pressed')}
            _text={{
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
            _light={{
              _text: {
                color: 'primary.900',
              },
            }}
            _dark={{
              _text: {
                color: 'primary.700',
              },
            }}
          >
            Sign up
          </Link>
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  )
  
}

export default LoginScreen