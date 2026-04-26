import React from 'react'
import MessageList from '../chat/MessageList'
import ChatInput from '../chat/ChatInput'
import Header from '../layout/Header'
export default function () {
  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <Header />
      <br />
      <div className="flex-1 overflow-y-auto">
        <MessageList />
      </div>

      <div className="flex justify-center items-center p-2 ">
        <ChatInput />
      </div>

    </div>
  )
}
