import React from 'react';
import { Flex } from '@chakra-ui/react';
import Column1 from './components/Column1';
import Column2 from './components/Column2';
import MyChart from './components/MyChart';

const App = () => {
  return (
    <Flex
      flexDir="row"
      height="100vh"
      maxW="2000px"
      overflow="hidden"
    >
      <Column1 />
      <Column2 />
      <MyChart />
    </Flex>
  );
};

export default App;
