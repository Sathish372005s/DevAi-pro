import React, { useState, useEffect } from "react";
import { usechatstore } from "../../store/useChatStore.js";

export default function Editpage() {
  const [text, setText] = useState("");
  const {editmsgid,startedit,editmessage,stopedit} =usechatstore()
  const handleeditmsg =() =>{
    editmessage(editmsgid,text)
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[500px] rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Message</h2>
          <button onClick={()=>{stopedit()}} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your message..."
          className="w-full h-32 bg-gray-100 rounded-lg p-3 outline-none resize-none"
        />
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={()=>{stopedit()}}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >Cancel</button>
          <button
            onClick={handleeditmsg}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
          > Save Changes</button>
        </div>

      </div>
    </div>
  );
}