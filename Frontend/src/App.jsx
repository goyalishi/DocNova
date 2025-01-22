import React ,{useState} from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Home from "./components/Home/Home";
import RefreshHandler from "./RefreshHandler";

const App = () => {

  const [isAuthenticated,setisAuthenticated] = useState(false);

  const PrivateRoute = ({element}) =>{
      return isAuthenticated ?element: <Navigate to ="/login"/>
  };

  return (
    <div className="App">

      <ToastContainer />
      <RefreshHandler setisAuthenticated={setisAuthenticated}/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<PrivateRoute element={<Home/>} />}/>
      </Routes>
    </div>
  );
};

export default App;
