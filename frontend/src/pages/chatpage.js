import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChat from "../components/MyChat";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

const Chatpage = () => {
   const { user } = ChatState();
   const[fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        //alignItems="center"
        width="100%"
        bg="grey"
        height="91.5vh"
        padding="10px"
        //overflow="hidden"
      >
        {user && (
          <MyChat fetchAgain={fetchAgain} />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage
