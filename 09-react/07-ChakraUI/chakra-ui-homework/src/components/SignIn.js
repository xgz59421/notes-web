import React from 'react'
import { Input, InputGroup, Stack, InputLeftAddon, Button, Checkbox, Text, Box } from "@chakra-ui/core";
import { FaUserAlt, FaLock, FaWeixin, FaQq, FaWeibo } from "react-icons/fa";

function SignIn() {
  return (
    <form >
      <Stack spacing="2">
        <InputGroup >
          <InputLeftAddon children={<FaUserAlt />} />
          <Input placeholder="手机或邮箱" />
        </InputGroup>
        <InputGroup >
          <InputLeftAddon children={<FaLock />} />
          <Input placeholder="密码" />
        </InputGroup>
      </Stack>

      <Box display="flex" alignItems="center" justifyContent="space-between" mt='15px'>
        <Checkbox fontSize='15px' color='#969696' isChecked>记住我</Checkbox>
        <Text fontSize='14px' color='#999'>登录遇到问题?</Text>
      </Box>
      <Button bgColor='#3194d0' color='#fff' w="100%" borderRadius='full' my='15px'>登录</Button>
      <Box display="flex" alignItems="center" justifyContent="space-around" w='100%' mt='10px'>
        <Box w={10} h={1} borderBottom='1px' color='#b5b5b5'></Box>
        <Text fontSize='12px' color='#b5b5b5'>社交帐号登录</Text>
        <Box w={10} h={1} borderBottom='1px' color='#b5b5b5'></Box>
      </Box>
      <Box w='60%' mx="auto" mt="15px" display="flex" justifyContent="space-around">
        <FaWeibo />
        <FaWeixin />
        <FaQq />
      </Box>
    </form>

  )
}

export default SignIn
