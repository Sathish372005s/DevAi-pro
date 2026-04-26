import React, { useState } from 'react'
import { usechatstore } from "../../store/useChatStore";

export default function Sidebar() {
  const [open, setopen] = useState(false)
  const [editId, setEditId] = useState(null)
  const [newtitle, setNewTitle] = useState("")

  const { chats, createchat, deletechatid, updatechat } = usechatstore();

  const handledelete = (id) => {
    deletechatid(id)
  }

  const handleedit = (chat) => {
    setEditId(chat.id)
    setNewTitle(chat.title)
  }

  const handleUpdate = (id) => {
    if (!newtitle.trim()) return
    updatechat(id, newtitle)
    setEditId(null)
  }

  const style = {
    display: open ? "none" : "block"
  }

  return (
    <>
      <svg
        style={style}
        onClick={() => setopen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 m-4 cursor-pointer"
      >
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
      </svg>

      {open && (
        <div className='w-64 h-screen bg-gray-100 p-4 flex flex-col'>

          <div>
            <div className='flex justify-between items-center mb-4'>
              <h1 className="text-lg font-semibold">
                <span className='text-green-500'>Daiv</span>AI
              </h1>
              <button onClick={() => setopen(false)}>X</button>
            </div>

            <button 
              onClick={createchat}
              className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600'
            >
              + New Chat
            </button>

            <div className='mt-4 space-y-2 overflow-y-auto max-h-[70vh]'>
              {
                chats.map((c) => (
                  <div key={c.id}>
                    <div className='flex justify-between items-center p-2 bg-white rounded-lg hover:bg-gray-200 transition'>

                      {
                        editId === c.id ? (
                          <input
                            type='text'
                            value={newtitle}
                            autoFocus
                            onChange={(e) => setNewTitle(e.target.value)}
                            onBlur={() => handleUpdate(c.id)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleUpdate(c.id)
                            }}
                            className="flex-1 text-sm bg-transparent outline-none"
                          />
                        ) : (
                          <span className="text-sm truncate flex-1">{c.title}</span>
                        )
                      }

                      <div className='flex gap-2 ml-2'>

                        <svg
                          onClick={() => handledelete(c.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 cursor-pointer text-gray-500 hover:text-red-500"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                        <svg
                          onClick={() => handleedit(c)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 cursor-pointer text-gray-500 hover:text-blue-500"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      )}
    </>
  )
}