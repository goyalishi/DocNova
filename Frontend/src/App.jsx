import React ,{useState} from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DocumentHome from "./components/DocumentHome";
import RefreshHandler from "./RefreshHandler";
import Editor from './components/Editor/Editor'
import './App.css';

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
        <Route path="/home" element={<PrivateRoute element={<DocumentHome/>} />}/>
        <Route path="/editor" element={<Editor documentId="doc1" />}></Route>
        <Route path='*' element={<h1>404 Page not Found</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
