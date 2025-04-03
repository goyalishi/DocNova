import React  from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DocumentHome from "./components/DocumentHome";
import Editor from './components/Editor/Editor'
import MyDocs from "./components/MyDocs";
import './App.css';

const App = () => {


  const PrivateRoute = ({element}) =>{
      return localStorage.getItem('token') ?element: <Navigate to ="/login"/>
  };

  const AuthRoute= ({element}) =>{
    return localStorage.getItem('token')?<Navigate to ="/home"/>:element;
  }


  return (
    <div className="App">

      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AuthRoute element={<LoginPage />} />}/>
        <Route path="/signup" element={<AuthRoute element={<SignupPage />} />}/>
        <Route path="/home" element={<PrivateRoute element={<DocumentHome/>} />}/>
        <Route path="/editor/:id" element={<PrivateRoute element={<Editor/>} />} />
        <Route path="/myDocs" element={<PrivateRoute element={<MyDocs/>} />}/>
        <Route path='*' element={<h1>404 Page not Found</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
