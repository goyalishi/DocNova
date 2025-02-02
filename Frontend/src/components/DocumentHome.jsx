import { useEffect,useState } from "react";
import Header from "./Header";
import RecentDocuments from "./DocumentsComp/RecentDocuments";
import NewDoc from "./DocumentsComp/NewDoc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DocumentHome() {

  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState("");
  const [recentDocs, setRecentDocs] = useState([]);

    useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  useEffect(() =>{
      getHome();
      fetchRecentDocuments();
    },[])

    
    async function fetchRecentDocuments() {
      try {
        const url = `${import.meta.env.VITE_APP_API_URI}/document/recent`;
      const headers= {
        headers :{'Authorization' : localStorage.getItem('token')}
      }
        const response = await axios.get(url,headers);
        console.log(response.data);

        setRecentDocs(response.data);
        
      } catch (error) {
          console.log("Error fetching recent Documents:",error);
          
      }
      
    }

  async function getHome() {
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
      <NewDoc fetchRecentDocuments={fetchRecentDocuments} />
      <RecentDocuments recentDocs={recentDocs} setRecentDocs={setRecentDocs} />
    </div>
  );
}

export default DocumentHome;
