import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Chats from "./pages/chatpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}

export default App;
