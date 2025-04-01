
import axios from "axios";

const sendChanges = (id,userId,socketRef,delta) =>{
    socketRef.current.emit("send-changes",{id,userId,delta});
};



const saveToDatabase = async(id,finalContent)=>{
    try {
        const url = `${import.meta.env.VITE_APP_API_URI}/document/${id}`;
        // console.log(finalContent);
        
        const response = await axios.put(
          url,
          { content:finalContent },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.removeItem(`doc_${id}`);
    }
    catch(error){
        console.log("Error while updating the document",error);
        
    }
};

export {sendChanges,saveToDatabase};