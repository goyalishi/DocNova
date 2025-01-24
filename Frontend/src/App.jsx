import React ,{useState} from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Home from "./components/Home/Home";
import RefreshHandler from "./RefreshHandler";
import {GoogleOAuthProvider} from '@react-oauth/google'

const App = () => {

  const [isAuthenticated,setisAuthenticated] = useState(false);

  const PrivateRoute = ({element}) =>{
      return isAuthenticated ?element: <Navigate to ="/login"/>
  };

  const GoogleAuthWrapper = ()=>{
      return (
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <LoginPage/>
          </GoogleOAuthProvider>
      )
  }

  return (
    <div className="App">

      <ToastContainer />
      <RefreshHandler setisAuthenticated={setisAuthenticated}/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<PrivateRoute element={<Home/>} />}/>
        <Route path='*' element={<h1>404 Page not Found</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
