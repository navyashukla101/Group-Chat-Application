import { Box, Text } from '@chakra-ui/layout'
import { 
  Drawer,
  DrawerHeader, 
  DrawerOverlay,
  DrawerBody, 
  DrawerContent, 
  Menu, 
  MenuButton, 
  MenuItem, 
  MenuList,
  MenuDivider, 
  Tooltip, 
  Avatar,
  Input,
 useToast} 
  from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon} from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import React, { useState } from 'react';
import {NotificationBadge} from "react-notification-badge";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/hooks';
import { position } from '@chakra-ui/system';
import ChatLoading from "../ChatLoading";
import axios from "axios";
import UserListItem from "../UserAvatar/UserListItem";

const SideDrawer = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingChat, setLoadingChat] = useState()

  const { user } = ChatState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose}= useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");                            //original code: history.push("/")
  };

  const toast = useToast();

  const handleSearch = async() => {
        if(!search)
        {
          toast({
            title: "Please Enter something to search",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top-left"
          });
          return;
        }
        try {
          setLoading(true)

          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };

          const {data} = await axios.get(`/api/user?search=${search}`, config);

          setLoading(false);
          setSearchResult(data);
        } catch(error) {
            toast({
              title: "Error Occured",
              description: "Failed to load the seacrh results",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom-left",
            });
        }
  };
  
  const accessChat = (userId) => {
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i class="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Chats
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button  onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ): (
              searchResult?.map((user) => (
                <UserListItem
                key={user._id}
                user={user}
                handleFunction={()=>accessChat(user._id)}
                />
              )) 
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
    
}

export default SideDrawer
