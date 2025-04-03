import React from "react";
import axios from 'axios';
import { GrDocumentText } from "react-icons/gr";

import { useNavigate } from "react-router-dom";

const NewDoc = ({fetchRecentDocuments}) => {

  const navigate = useNavigate();

  async function createNewDocHandler(){
  
    try {
      const url=`${import.meta.env.VITE_APP_API_URI}/document/`;
      const response = await axios.post(
        url,
        {
          title:"Untitled Document",
          content: { ops: [] },
        },
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization' : localStorage.getItem('token'),
          }
        },
      ); 
  
      console.log(response.data);
      fetchRecentDocuments();

      const newDoc = response.data.newDoc;
      const docId = newDoc._id;
      
  
      navigate(`/editor/${docId}`);
      
      
    } catch (error) {
      console.log("Error",error);
      
    }
    
  }

  return (
    <section className="text-center py-8 bg-gray-50 h-[35vh] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-gray-800">Welcome to DocNova</h2>
      <p className="text-gray-600 mt-2 text-lg">
        Create, edit, and collaborate on documents with ease.
      </p>
      <button onClick={createNewDocHandler} className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 max-w-[300px]">
        + Create New Document
      </button>
      <button onClick={()=>{navigate('/myDocs')}} className="bg-purple-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-purple-600 max-w-[300px]">
        <div className="flex flex-row gap-2 items-center">
          <GrDocumentText size={20}/>
          <p>View all Documents</p>
        </div>
      </button>
    </section>
  );
};

export default NewDoc;
