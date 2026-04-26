import React, { useState } from 'react'

export default function ChatInput() {
  const [textmsg,settextmsg] = useState("")
  return (
    <div className='border-1 border-green-400 mb-7 flex items-center p-3 '>
      <input className=' w-3xl'
        placeholder='message nexus neural'
        type='text'
        onChange={(e)=>{settextmsg(e.target.value)}}
      />
    </div>
  )
}

