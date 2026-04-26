import React from "react";
import { usechatstore } from "../../store/useChatStore.js";

const Deletecomp = () => {
    const {deletemsg,editmsgid,delemsgid,stopdelete}= usechatstore()

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative bg-white rounded-2xl shadow-lg w-[400px] p-6 z-10">

        <button
          onClick={()=>{stopdelete()}}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          x
        </button>

        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <h1>del</h1>
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold">
          Delete Message?
        </h2>

        <p className="text-center text-gray-500 text-sm mt-2">
          Are you sure you want to delete this message? This action cannot be undone.
        </p>

        <div className="flex gap-3 mt-6">
          <button
          onClick={()=>{stopdelete()}}
            className="w-full py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={()=>{deletemsg(delemsgid)}}
            className="w-full py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deletecomp;