import React, { useEffect } from 'react'
import { usechatstore } from "../../store/useChatStore.js";
import Nochat from './Nochat.jsx';

export default function MessageList() {
  const {chats,activechatid,addchat,createchat} =usechatstore()
  const activeChat = chats.find(chat => chat.id === activechatid);
  const messagesarray = activeChat?.messages || [];

  useEffect(()=>{
    if (messagesarray.length === 0) return;
    const lastMsg = messagesarray[messagesarray.length - 1];
    if(lastMsg.sender === "Ai") return
    setTimeout(()=>{
      addchat("this from ai", "Ai")
    },2000)
  },[messagesarray.length])

  console.log("this from liost",messagesarray);
  return (
    activechatid == null ? (
    <Nochat />
  ) : (
    <div className=''>
      {
        messagesarray.map((msg) => (
          <div key={msg.id} className={`flex gap-2 p-1.5 m-2.5 ${
  msg.sender == "you" ? "bg-gray-200" : "bg-white"
} mr-2 rounded`}>
            <div className='flex items-center ml-4 p-1.5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${ msg .sender == "you" ? "bg-gray-400":"bg-green-400"} rounded text-amber-50 p-1 `}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div className='flex justify-between'>
              <div>
                <div className='flex gap-2.5'>
                  <p className='font-bold'>{msg.sender}</p>
                  <p>{new Date(msg.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <h2>{msg.textmsg}</h2>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
);
  
}

