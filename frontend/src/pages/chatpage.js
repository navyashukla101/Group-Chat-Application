import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChat from "../components/MyChat";
import ChatBox from "../components/ChatBox";

const Chatpage = () => {
   const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        flexDirection="row" 
        justifyContent="space-between"
        //alignItems="center"
        width="100%"
        bg="maroon"
        height="91.5vh"
        padding="10px"
        //overflow="hidden"
      >
        {user && <MyChat />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chatpage
