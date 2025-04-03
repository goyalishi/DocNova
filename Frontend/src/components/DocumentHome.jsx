import { useEffect, useState } from "react";
import Header from "./Header";
import RecentDocuments from "./DocumentsComp/RecentDocuments";
import NewDoc from "./DocumentsComp/NewDoc";
import EmptyDoc from "./DocumentsComp/EmptyDoc";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";
import { MdGroup } from "react-icons/md";


function DocumentHome() {
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState("");
  const [recentDocs, setRecentDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  useEffect(() => {
    getHome();
    fetchRecentDocuments();
  }, []);

  async function fetchRecentDocuments() {
    try {
      const url = `${import.meta.env.VITE_APP_API_URI}/document/recent`;
      const headers = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      const response = await axios.get(url, headers);
      console.log(response.data);

      setRecentDocs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching recent Documents:", error);
    }
  }

  async function getHome() {
    try {
      const url = `${import.meta.env.VITE_APP_API_URI}/home`;
      const headers = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      const result = await axios.get(url, headers);
      console.log(result.data);
    } catch (error) {
      const errorMsg = error.response.data.msg;
      console.log(errorMsg);
    }
  }
  return (
    <div className="bg-gray-50 min-h-screen w-full mx-2 mb-4">
      <Header />
      <NewDoc fetchRecentDocuments={fetchRecentDocuments} />

      {recentDocs.length===0? <EmptyDoc className="my-[2rem]" /> : null}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[50px] w-[50px] m-auto">
          <svg
            fill="currentColor"
            viewBox="0 0 1792 1792"
            class="text-blue-600 w-15 h-15 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" />
          </svg>
        </div>
      ) : recentDocs.length!==0? (
        <RecentDocuments
          recentDocs={recentDocs}
          setRecentDocs={setRecentDocs}
        />
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-[65%] gap-4 items-center mx-auto ">
        <div className="flex flex-col items-start justify-center p-4 rounded-md hover:shadow-md border-2 border-gray-300 bg-white gap-2 h-[200px] hover:border-yellow-300">
          <div className="flex flex-row gap-2 items-center">
            <GrDocumentText
              className="rounded-[50%] bg-purple-300  text-purple-700 p-2"
              size={35}
            />
            <p className="font-semibold">Create and edit</p>
          </div>
          <p className="text-gray-500">
            Create documents and edit them with our intuitive interface. Format
            text, add images, and organize your content.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center p-4 rounded-md hover:shadow-md border-2 border-gray-300 bg-white gap-2 h-[200px] hover:border-yellow-300">
          <div className="flex flex-row gap-2 items-center">
            <MdGroup
              className="rounded-[50%] bg-purple-300  text-purple-700 p-2"
              size={35}
            />
            <p className="font-semibold">Collaborate</p>
          </div>
          <p className="text-gray-500">
            Work together with your team in real-time. See changes as they
            happen and communicate effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DocumentHome;
