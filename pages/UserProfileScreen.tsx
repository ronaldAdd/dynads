import React from 'react'
import {
    HStack,
    Icon,
    VStack,
    Avatar,
    Button,
    useColorModeValue,
    useBreakpointValue,
  } from 'native-base';

  import { MaterialIcons } from '@expo/vector-icons';
  // import FloatingLabelInput from '../Components/FloatingLabelInput';

  import DashboardLayout from '../layouts/DashboardLayout';
  
  
// function UserProfileScreen() {
//   return (
//     <div>UserProfileScreen</div>
//   )
// }

// export default UserProfileScreen


export default function () {
    const bgColor = useBreakpointValue({
      base: '#1f2937',
      lg: '#111827',
      md: '#111827',
      xl: '#111827',
    });
  
    return (
      <>
        {/* <DashboardLayout title="Profile"> */}
          <VStack
            px={{ base: 4, md: 12, lg: 24, xl: 32 }}
            py={{ base: 4, md: 10 }}
            borderRadius={{ md: '8' }}
            _light={{
              borderColor: 'coolGray.200',
              bg: { base: 'coolGray.50' },
            }}
            _dark={{
              borderColor: 'coolGray.800',
              bg: { md: 'coolGray.900', base: 'coolGray.800' },
            }}
            borderWidth={{ md: '1' }}
            borderBottomWidth="1"
            space="4"
            flex="1"
          >
            <HStack mb="3" alignItems="center" justifyContent="space-between">
              <Avatar source={require('../assets/women.jpg')} w="24" h="24" />
              <Button
                size="sm"
                _light={{
                  borderColor: 'primary.900',
                  color: 'primary.900',
                  _text: { color: 'primary.900' },
                }}
                _dark={{
                  borderColor: 'coolGray.400',
                  color: 'coolGray.400',
                  _text: { color: 'coolGray.400' },
                }}
                variant="outline"
                startIcon={
                  <Icon
                    as={MaterialIcons}
                    name="mode-edit"
                    _light={{
                      color: 'primary.900',
                    }}
                    _dark={{
                      color: 'coolGray.400',
                    }}
                    color="#45268F"
                    size="5"
                  />
                }
              >
                Edit Profile
              </Button>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">

            </HStack>
  



            <HStack alignItems="center" justifyContent="space-between">


            </HStack>
            <HStack alignItems="center" justifyContent="space-between">


            </HStack>
          </VStack>
        {/* </DashboardLayout> */}
      </>
    );
  }