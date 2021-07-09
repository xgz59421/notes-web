import React from "react";

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Text,
  useColorModeValue
} from "@chakra-ui/core";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Box bgColor='#fff' w="400px" mx='auto' mt='10' p='50px'>
      <Tabs isFitted>
        <TabList w='50%' mx="auto" textAlign='center'>
          <Tab _focus={{ boxShadow: "none" }}>登录</Tab>
          <Text> . </Text>
          <Tab _focus={{ boxShadow: "none" }}>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
