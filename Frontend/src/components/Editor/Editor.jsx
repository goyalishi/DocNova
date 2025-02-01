import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Save } from "lucide-react";
import {useNavigate} from 'react-router-dom';



const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],           

  [{ header: 1 }, { header: 2 }],                 
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }], 
  [{ script: 'sub' }, { script: 'super' }],        
  [{ indent: '-1' }, { indent: '+1' }],            
  [{ direction: 'rtl' }],                          
  [{ size: ['small', false, 'large', 'huge'] }],   
  [{ header: [1, 2, 3, 4, 5, 6, false] }],         

  [{ color: [] }, { background: [] }],             
  [{ font: [] }],
  [{ align: [] }],                                

  ['clean']                                       
];

function Editor({ documentId}) {

   

const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Untitled Document");

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSave = () => {
    console.log("Saving document:", documentId, content);
    navigate('/home');
  };


  

  const modules = {
    toolbar: toolbarOptions
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
