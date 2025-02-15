import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Chats from "./pages/chatpage";
import background from "./Assets/background1.jpg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}

export default App;
