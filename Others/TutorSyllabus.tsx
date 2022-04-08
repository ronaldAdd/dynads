import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  Box,
  IconButton,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconHome from './components/IconHome';
import IconSearch from './components/IconSearch';
import IconSyllabus from './components/IconSyllabus';
import IocnSubscribe from './components/IconSubscribe';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Course = {
  name: string;
  number: string;
  iconName: string;
};
const course: Course[] = [
  {
    name: 'PSIR Optional',
    number: '35 Courses',
    iconName: 'chevron-right',
  },
  {
    name: 'Public Administration Optional ',
    number: '35 Courses',
    iconName: 'chevron-right',
  },
  {
    name: 'Sociology Optional',
    number: '35 Courses',
    iconName: 'chevron-right',
  },
  {
    name: 'History Optional',
    number: '35 Courses',
    iconName: 'chevron-right',
  },
  {
    name: 'Geological Optional',
    number: '35 Courses',
    iconName: 'chevron-right',
  },
  {
    name: 'Political Optional',
    number: '35 Courses',
    iconName: 'chevron-right',
  },
  {
    name: 'PSIR Optional',
    number: '35 Courses',
    iconName: 'chevron-right',
  },
];
export default function TutorSyllabus() {
  return (
    <>
      <DashboardLayout displaySidebar={false} title=" Syllabus">
        <VStack
          px={{ base: 4, md: 4, lg: 4 }}
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
          space="4"
          flex={1}
        >
          <VStack
            space={2}
            borderBottomWidth={1}
            pb={2}
            _light={{
              borderColor: 'coolGray.200',
            }}
            _dark={{
              borderColor: 'coolGray.600',
            }}
          >
            <Text
              fontSize="sm"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.300' }}
              letterSpacing={0.2}
            >
              Subscribe and access
            </Text>
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontSize="md"
              fontWeight="normal"
              letterSpacing={0.2}
            >
              Complete UPSC CSE - Optional
            </Text>
            <HStack alignItems="center" space={1}>
              <Text
                fontSize="md"
                letterSpacing={0.2}
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Syllabus with
              </Text>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="md"
              >
                Structured Course
              </Text>
            </HStack>
          </VStack>
          <VStack>
            {course.map((item, index) => {
              return (
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  my={2}
                  key={index}
                >
                  <VStack>
                    <Text
                      _dark={{ color: 'coolGray.50' }}
                      _light={{ color: 'coolGray.800' }}
                      fontWeight="medium"
                      fontSize="sm"
                    >
                      {item.name}
                    </Text>
                    <Text
                      color="coolGray.500"
                      fontWeight="medium"
                      fontSize="sm"
                    >
                      {item.number}
                    </Text>
                  </VStack>
                  <IconButton
                    p={0}
                    variant="unstyled"
                    icon={
                      <Icon
                        as={MaterialCommunityIcons}
                        size="6"
                        name={item.iconName}
                        _light={{ color: 'coolGray.500' }}
                        _dark={{ color: 'coolGray.500' }}
                      />
                    }
                    onPress={() => {
                      console.log(
                        'this will open more options for the courses'
                      );
                    }}
                  />
                </HStack>
              );
            })}
          </VStack>
        </VStack>
      </DashboardLayout>
      <Box
        display={{ md: 'none', base: 'flex' }}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'customGray' }}
        alignSelf="center"
        shadow={9}
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        p={4}
        rounded={4}
        height={20}
        position="absolute"
        px={10}
        bottom={0}
        left={0}
        right={0}
      >
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <HStack justifyContent="space-between">
            <VStack alignItems="center">
              <IconHome />
              <Text
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
                py={2}
              >
                Home
              </Text>
            </VStack>
            <VStack alignItems="center">
              <IconSyllabus />
              <Text
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.700' }}
                fontSize="xs"
                fontWeight="medium"
                py={2}
              >
                Syllabus
              </Text>
            </VStack>
            <VStack alignItems="center">
              <IconSearch />
              <Text
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
                py={2}
              >
                Search
              </Text>
            </VStack>
            <VStack alignItems="center">
              <IocnSubscribe />
              <Text
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
                py={2}
              >
                Subscribe
              </Text>
            </VStack>
          </HStack>
        </Pressable>
      </Box>
    </>
  );
}
