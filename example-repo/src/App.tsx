import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Demo } from "./pages/Demo"
import { LoginPage } from "./components/Login";

function App() {
  return (
    // <div>
    //   <Login />
    //   <UploadData />
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customize" element={<Demo/>} />
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
