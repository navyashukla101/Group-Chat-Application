import React, { useEffect } from "react";
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
import Login from "../components/Authentication/Login"; // Fixed path
import Signup from "../components/Authentication/Signup"; // Fixed path
import { useNavigate } from "react-router-dom"; // Updated import

const Homepage = () => {
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/chats"); // Updated from history.push to navigate
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex" // Fixed typo (was dis="flex")
        justifyContent="center"
        padding={3}
        bg={"white"}
        width={"100%"}
        margin={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        textAlign="center"
      >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"}>
          Chat
        </Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        padding={4}
        borderRadius={"lg"}
        color={"black"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList marginBottom={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
