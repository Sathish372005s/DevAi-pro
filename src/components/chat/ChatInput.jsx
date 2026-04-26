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
    <div className='border border-green-400 rounded-2xl  mb-7 flex items-center p-3 w-full max-w-3xl'>
      <input className='w-full bg-transparent outline-none px-4'
        placeholder='message nexus neural'
        type='text'
        onChange={(e)=>{settextmsg(e.target.value)}}
      />
      <div className="flex ">
        
        <svg onClick={()=>{handlechat(textmsg)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        

      </div>
    </div>
  )
}

