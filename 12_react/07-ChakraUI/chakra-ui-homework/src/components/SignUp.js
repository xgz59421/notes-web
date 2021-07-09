import React from 'react'
import { Input, InputGroup, Stack, InputLeftAddon, Button, Flex, Center, Text, Box } from "@chakra-ui/core";
import { FaUserAlt, FaLock,FaPhoneAlt, FaWeixin, FaQq } from "react-icons/fa";

function SignUp() {
  return (
    <form >
      <Stack spacing="2">
        <InputGroup >
          <InputLeftAddon children={<FaUserAlt />} />
          <Input placeholder="你的昵称" />
        </InputGroup>
        <InputGroup >
          <InputLeftAddon children={<FaPhoneAlt />} />
          <Input placeholder="手机号" />
        </InputGroup>
        <InputGroup >
          <InputLeftAddon children={<FaLock />} />
          <Input placeholder="设置密码" />
        </InputGroup>
      </Stack>
      <Button bgColor='#42c02e' color='#fff' w="100%" borderRadius='full' my='15px'>注册</Button>
      {/* <Box w='100%' mx="auto"  display="flex" flexDirection='column' justifyContent="center">
        <Text color='#969696' fontSize='12px'>点击 “注册” 即表示您同意并愿意遵守简书</Text>
        <Text color='#969696' fontSize='12px'><a>用户协议</a>和<a>隐私政策</a>。</Text>
      </Box> */}
        <Center>
        <Text color='#969696' fontSize='12px'>点击 “注册” 即表示您同意并愿意遵守简书</Text>
        </Center>
        <Center>
          <Flex>
          <Text color='#3194d0' fontSize='12px'>用户协议 </Text>
          <Text color='#969696' fontSize='12px' px={1}>和</Text>
          <Text color='#3194d0' fontSize='12px'> 隐私政策</Text>
          </Flex>
        </Center>
  
      <Box display="flex" alignItems="center" justifyContent="space-around" w='100%' mt='10px'>
        <Box w={10} h={1} borderBottom='1px' color='#b5b5b5'></Box>
        <Text fontSize='12px' color='#b5b5b5'>社交帐号直接登录</Text>
        <Box w={10} h={1} borderBottom='1px' color='#b5b5b5'></Box>
      </Box>
      <Box w='60%' mx="auto" mt="15px" display="flex" justifyContent="space-around">
        <FaWeixin />
        <FaQq />
      </Box>
    </form>

  )
}

export default SignUp
