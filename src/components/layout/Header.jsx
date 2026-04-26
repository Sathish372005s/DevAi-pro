import React, { useEffect } from 'react'
import { useState } from 'react'
import { usechatstore } from "../../store/useChatStore.js";

export default function Header() {
  const [open, setopen] = useState(false)
  const {aimodel,setaimodel}= usechatstore()
  console.log("ddddd",aimodel)
   const aiModels = [
  {
    id: "neural-nexus",
    name: "Neural Nexus",
    version: "Quantum Core v3.8",
  },
  {
    id: "cerebral-prime",
    name: "Cerebral Prime",
    version: "Advanced Reasoning v2.1",
  },
  {
    id: "synapse-ultra",
    name: "Synapse Ultra",
    version: "Creative Engine v4.0",
  },
  {
    id: "logic-core",
    name: "Logic Core",
    version: "Fast Response v1.5",
  },
];
 useEffect(() => {
  if (!aimodel) {
    setaimodel(aiModels[0].id);
  }
}, [aimodel]);
  return (
    <div className='flex gap-1'>
      <div className='p-4'>
        <svg onClick={()=>setopen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>
      <div className='m-3  p-2 rounded bg-green-400'>
        <h1 className='text-white'>{aimodel}</h1>
      </div>
      {open && (
        <div className="absolute left-4 top-14 w-[280px] bg-white rounded-xl shadow-lg p-3 ml-65">
          <p className="text-sm text-gray-500 mb-3">Select AI Engine</p>

          {aiModels.map((ai) => (
            <div
              onClick={()=>{setaimodel(ai.name)}}
              key={ai.id}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100">
              <div className="bg-green-500 text-white p-2 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="font-medium">{ai.name}</h3>
                <p className="text-sm text-gray-500">{ai.version}</p>
              </div>
              {ai.name === aimodel && (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
