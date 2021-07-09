import React from "react";
import { chakra, Button, Box, useColorMode, Text, useColorModeValue, LightMode } from '@chakra-ui/core';

const LaGouButton = chakra('button', {
  themeKey: 'LaGouButton'
});

function App() {
  const [colorMode, toggleColorMode] = useColorMode();
  /**
   * 切换颜色
   * light: tomato
   * dark: skyblue
   */
  const bgColor = useColorModeValue('tomato', 'skyblue')
  return <div>
    {/* <Box w='200px' h='200px' bgColor={colorMode == 'light'? 'tomato': 'skyblue'}></Box> */}
    <Box w='200px' h='200px' bgColor={bgColor}>
      {/* 通过localstorage 存储颜色模式的值 */}
      <Text>当前的颜色模式是 {colorMode}</Text>
      <LaGouButton size="md" variant="danger">自定义按钮</LaGouButton>
    </Box>
    <Button onClick={toggleColorMode}>切换颜色模式</Button>
    <LightMode>
      <Button onClick={toggleColorMode}>切换颜色模式</Button>
    </LightMode>
    <Box mt='6' w={['100px', '300px', '500px', '700px', '900px']} h='200px' bgColor='gray.500'></Box>
  </div>;
}

export default App;
