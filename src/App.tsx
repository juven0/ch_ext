import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/userHome/userHome";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<UserHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
