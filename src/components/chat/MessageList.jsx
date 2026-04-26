import React, { useEffect } from 'react';
import { usechatstore } from "../../store/useChatStore.js";
import Nochat from './Nochat.jsx';
import Editpage from './Editpage.jsx';
import Deletecomp from './Deletecomp.jsx';

export default function MessageList() {
  const { chats, activechatid, addchat ,editmsgid,startedit,editmessage,stopedit,iseditingmsg,isdeleting,startdelete,delemsgid,aimodel} = usechatstore();

  const activeChat = chats.find(chat => chat.id === activechatid);
  const messagesarray = activeChat?.messages || [];

  useEffect(() => {
    if (messagesarray.length === 0) return;

    const lastMsg = messagesarray[messagesarray.length - 1];

    if (lastMsg.sender === "Ai") return;

    setTimeout(() => {
      addchat("this from ai", "Ai");
    }, 2000);
  }, [messagesarray.length]);

  console.log("dfvfvdf",delemsgid)

  return (
    activechatid == null ? (
      <Nochat />
    ) : (
      <div>
        {messagesarray.map((msg) => {
          const isUser = msg.sender === "you"; 

          return (
            <div
              key={msg.id}
              className={`group flex gap-2 p-2 m-2.5 ${isUser ? "bg-gray-200" : "bg-white"} rounded items-start`}>
              <div className="flex items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${isUser ? "bg-gray-400" : "bg-green-400"} rounded text-white p-1`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                </svg>
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <div className="flex gap-2.5">
                    <p className="font-bold">{msg.sender}</p>
                    <p>{new Date(msg.createdAt).toLocaleString()}</p>
                  </div>

                  <div>
                    <h2>{msg.textmsg}</h2>
                  </div>
                </div>
                {isUser && (
                  <div className="hidden group-hover:flex gap-2 items-center transition-all duration-300 ease-in-out">
                    <button className="p-1 hover:bg-gray-300 rounded" onClick={()=>{startedit(msg.id)}}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
                      </svg>
                    </button>
                    <button onClick={()=>{startdelete(msg.id)}} className="p-1 hover:bg-red-200 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166M19.228 5.79 18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79" />
                      </svg>
                    </button>

                  </div>
                )}

              </div>
            </div>
          );
        })}
        {iseditingmsg && (
          <Editpage/>
        )}
        {isdeleting && (
          <Deletecomp />
        )}
      </div>
      
    )
  );
}