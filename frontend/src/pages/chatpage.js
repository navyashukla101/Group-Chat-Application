import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChat from "../components/MyChat";
import ChatBox from "../components/ChatBox";
const Chatpage = () => {
   const { user } = ChatState();

  return (<div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box>
        {user && <MyChat />} 
        {user && <ChatBox />} 
        console.log("chatpage");
      </Box>
    </div>
    );
};

export default Chatpage
