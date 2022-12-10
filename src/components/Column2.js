import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';

const Column2 = () => {
  return (
    <Flex
      w="60%"
      bgColor="blue.50"
      p={30}
      flexDir="column"
      color="black"
    >
      <Heading fontWeight="400" letterSpacing="tight" color="black">
        Welcome bro
      </Heading>
      <Flex flexDir="row" p={30} justifyContent="space-between">
        <Flex flexDir="column">
          <Text fontWeight="100" letterSpacing="tight" fontSize="sm">
            My balance
          </Text>
          <Text
            fontWeight="bold"
            letterSpacing="tight"
            fontSize="2xl"
          >
            $5,090
          </Text>
        </Flex>{' '}
        <Flex>
          <Button>Day</Button>
          <Button color="white" bgColor="black" borderRadius={15}>
            Year
          </Button>
          <Button>Hour</Button>
          <Button>Week</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Column2;
