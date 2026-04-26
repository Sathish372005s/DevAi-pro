import React, { useState } from 'react'
import { usechatstore } from "../../store/useChatStore.js";

export default function ChatInput() {
  const [textmsg,settextmsg] = useState("")
  const {chats,activechatid,addchat,createchat} =usechatstore()
  console.log(textmsg,"with active" , activechatid,chats)
  const handlechat = (text) =>{
    if(chats.length==0){
      createchat()
      addchat(text)
    }
    else{
      addchat(text)
    }
  }


  return (
    <div className='border border-green-400 rounded-2xl bg-gray-200  mb-7 flex items-center p-3 w-full max-w-3xl'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>

      <input className='w-full  outline-none px-4 p-4 '
        placeholder='message nexus neural'
        type='text'
        onKeyDown={(e) => {
          if (e.key === "Enter") handlechat(textmsg)
        }}
        onChange={(e)=>{settextmsg(e.target.value)}}
      />
      <div className="flex gap-1.5">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
</svg>

        
        <svg onClick={()=>{handlechat(textmsg)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        

      </div>
    </div>
  )
}

