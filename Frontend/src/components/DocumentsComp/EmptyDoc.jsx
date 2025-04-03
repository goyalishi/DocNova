import React from 'react'
import { GrDocumentText } from "react-icons/gr";

function EmptyDoc({className}) {
  return (
    <div className={`${className} flex flex-col items-center justify-center gap-2 mx-[2rem]`}>
        <div className='flex jus items-center bg-purple-200 text-purple-600 rounded-[50%] h-[100px] w-[100px]'>
            <GrDocumentText size={40} className=' m-auto'/>
        </div>
        <p className='text-2xl text-center'>No documents yet</p>
        <p className='text-gray-500 text-center'>Create your first document to get started with DocNova and experience seamless document collaboration.</p>
    </div>
  )
}

export default EmptyDoc
