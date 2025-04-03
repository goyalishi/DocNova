import React from "react";
import { IoMdTime, IoMdPerson } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
function DocCard({ docId,color, title, lastEdited, owner, createdAt }) {

  return (
    <div
      className={`flex flex-col flex-wrap  border-t-4 p-4 shadow-md rounded-md max-h-[300px] justify-evenly `}
      style={{ borderTopColor: color }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex flex-row items-center gap-2">
          <IoMdTime color="gray" />
          <p className="text-gray-500">Last edited on {lastEdited}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1 items-center">
          <IoMdPerson color="gray" />
          <p className="text-gray-500">{owner}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <FiCalendar color="gray"/>
          <p className="text-gray-500">{createdAt}</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 mt-3">
        <button className="rounded-md p-2 bg-slate-300 hover:bg-slate-500 hover:text-white">
            <MdModeEditOutline/>
        </button>
        <button className="rounded-md p-2 bg-slate-300 hover:bg-slate-500 text-black hover:text-red-600">
            <AiFillDelete/>
        </button>
      </div>
    </div>
  );
}

export default DocCard;
