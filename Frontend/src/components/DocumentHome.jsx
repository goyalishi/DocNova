import { useEffect,useState,useNavigate } from "react";
import Header from "./Header";
import RecentDocuments from "./DocumentsComp/RecentDocuments";
import HeroSection from "./DocumentsComp/HeroSection";

function DocumentHome() {

  const [loggedInUser, setLoggedInUser] = useState("");

  

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  useEffect(() =>{
      getDocs();
    },[])
    

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
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      <HeroSection />
      <RecentDocuments />
    </div>
  );
}

export default DocumentHome;
