import React from 'react';
import {
  Flex,
  Heading,
  HStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { BiBarChart } from 'react-icons/bi';

const Column1 = () => {
  return (
    <Flex
      w="15%"
      height="100vh"
      background="#020000"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex as="nav" alignSelf="center" p="30px">
        <Heading letterSpacing="tight" size="lg">
          Alex.
        </Heading>
      </Flex>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        as="nav"
      >
        <HStack p="10px">
          {' '}
          <BiBarChart />
          <Text>Dashboard</Text>
        </HStack>
        <HStack p="10px">
          {' '}
          <BiBarChart />
          <Text>Dashboard</Text>
        </HStack>
        <HStack p="10px">
          {' '}
          <BiBarChart />
          <Text>Dashboard</Text>
        </HStack>
        <HStack p="10px">
          {' '}
          <BiBarChart />
          <Text>Dashboard</Text>
        </HStack>
      </Flex>
      <Flex flexDir="column" alignSelf="center" mb={10}>
        <Avatar src="Alex.jpg" />
        <Text alignSelf="center">I'm Alex</Text>
      </Flex>
    </Flex>
  );
};

export default Column1;
