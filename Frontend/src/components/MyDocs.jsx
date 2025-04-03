import React, { useState, useEffect } from "react";
import DocCard from "./DocumentsComp/DocCard";
import EmptyDoc from "./DocumentsComp/EmptyDoc";
import axios from "axios";

function MyDocs() {
  const [myDocs, setMyDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (isoString) => {
    const date = new Date(isoString);

    return `${date.toLocaleDateString()}`;
  };

  useEffect(() => {
    async function fetchDocs() {
      try {
        const url = `${import.meta.env.VITE_APP_API_URI}/document/myDocs`;
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        const allDocs = response.data.documents;
        console.log(allDocs);

        if (allDocs) {
          setMyDocs(allDocs);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error fetching docuemnt", error);
      }
    }

    fetchDocs();
  }, []);

  function getRandomHexColor() {
    const generateColor = () => {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
    };
    return generateColor();
  }

  return (
        <div className="flex flex-col gap-[3rem] w-full p-4">
          <div className="flex flex-col items-start shadow-md p-2">
            <h1 className="text-3xl font-bold">My Documents</h1>
            <p className="text-gray-500 text-lg">
              Access and manage all your documents in one place
            </p>
          </div>
          <div className="flex justify-start md:w-[60vw] sm:w-auto  gap-4">
            <input
              type="text"
              placeholder="Search documents..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full outline-none "
            />
          </div>
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
          ) : myDocs.length===0?(<EmptyDoc/>):(
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myDocs.map((doc) => {
                const owner = JSON.parse(
                  localStorage.getItem("user-info")
                ).name;
                const editTime = formatDate(doc.updatedAt);
                const createTime = formatDate(doc.createdAt);
                return (
                  <DocCard
                    key={doc._id}
                    color={getRandomHexColor()}
                    title={doc.title}
                    owner={owner}
                    lastEdited={editTime}
                    createdAt={createTime}
                    docId={doc._id}
                  />
                );
              })}
            </div>
          )}
        </div>
      
  );
}

export default MyDocs;
