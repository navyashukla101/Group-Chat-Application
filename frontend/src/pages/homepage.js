import React from 'react';
import { 
  Container,
  Box,
  Tab,
  Text,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
 } from "@chakra-ui/react";
 import Login from "../components/Auhentication/Login";
 import Signup  from '../components/Auhentication/Signup';


const Homepage =() =>{
  return (
    <Container maxW='xl' centerContent>
      <Box
      dis="flex"
      justifyContent="center"
      padding={3}
      bg={"white"}
      width={"100%"}
      margin={"40px 0 15px 0"}
      borderRadius={"lg"}
      borderWidth={"1px"}
      textAlign="center"
      >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"} >Chat</Text>
      </Box>
      <Box bg={"white"}
      w={"100%"}
      padding={4}
      borderRadius={"lg"}
      color={"black"}
      borderWidth={"1px"}>
        <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList marginBottom={"1em"}>
    <Tab width={"50%"}>Login</Tab>
    <Tab width={"50%"}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>{<Login/>}</TabPanel>
    <TabPanel>{<Signup/>}</TabPanel>
  </TabPanels>
</Tabs>
      
      </Box>
      
    </Container>
  )
}

export default Homepage
