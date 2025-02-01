import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);
  
  useEffect(() =>{
    getDocs();
  },[])

  // Logout fnctionality

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    toast.success("Logged out Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  async function getDocs() {
    try {
      const url = `${import.meta.env.VITE_APP_API_URI}/home`;
      const headers= {
        headers :{'Authorization' : localStorage.getItem('token')}
      }
      const result = await axios.get(url,headers);
      console.log(result.data);
    } catch (error) {
      const errorMsg= error.response.data.msg;
      console.log(errorMsg);
      
      
    }
  }


  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome {loggedInUser}</p>
      <button className="p-2 rounded-md bg-blue-500 " onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
