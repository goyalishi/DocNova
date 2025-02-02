import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Save } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
];

function Editor() {
  const { id } = useParams();
  const documentId = id;

  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Untitled Document");

  useEffect(()=>{
    async function loadDocument() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URI}/document/${id}`);
        const data = response.data;
        console.log(data);

        setContent(data.content);
        setTitle(data.title);
      } catch (error) {
        console.error("Error loading document:", error);
      }
    }

    loadDocument();

  },[id]);

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


  const handleChange = (content, delta, source, editor) => {
    setContent(editor.getContents());
  };

  const handleSave = async () => {
    try {
      const url = `${import.meta.env.VITE_APP_API_URI}/document/${id}`;
      const response = await axios.put(
        url,
        { content, title },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchRecentDocuments();
      console.log("Saving document-Id:", documentId);
      console.log("Updated Document:", response.data.updatedDoc);
      navigate("/home");
      toast.success(response.data.msg);
    } 
    catch (error) {
      console.error("Error saving document:", error);
    }
  };

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 ">
      <div className="w-full flex items-center justify-between p-4 bg-white sticky top-0 z-10">
        <div className="flex flex-row gap-3">
          <img
            src="https://www.svgrepo.com/show/223052/forms-document.svg"
            alt="Logo"
            className="w-8 h-8"
          />

          <input
            type="text"
            className="text-xl font-semibold outline-gray-300 bg-transparent  px-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <Save size={18} /> Save
        </button>
      </div>

      <div className="flex-1  p-4 lg:w-[60vw] lg:mx-auto overflow-auto">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          modules={modules}
          className="h-full bg-white rounded-lg "
        />
      </div>
    </div>
  );
}

export default Editor;
