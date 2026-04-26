import React from 'react'

export default function Nochat() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className="flex flex-col justify-center items-center">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 bg-green-300 rounded p-1.5 text-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <br />
            <p className='text-center'>ask me anything i will help you</p>
            <br />
            <div className='grid grid-cols-2 gap-4 '>
              <div className='flex flex-col bg-gray-200 p-3 rounded-lg item-center justify-center border-2 border-gray-300'>
                <h1 className='text-center font-bold'>code help</h1>
                <p className='text-center'>debug and write code</p>
              </div>
              <div className='flex flex-col bg-gray-200 p-3 rounded-lg item-center justify-center border-2 border-gray-300'>
                <h1 className='text-center font-bold'>explanation</h1>
                <p className='text-center'>understand complex topics</p>
              </div>
              <div className='flex flex-col bg-gray-200 p-3 rounded-lg item-center justify-center border-2 border-gray-300'>
                <h1 className='text-center font-bold'>creative writing</h1>
                <p className='text-center'>generate content and ideas</p>
              </div>
              <div className='flex flex-col bg-gray-200 p-3 rounded-lg item-center justify-center border-2 border-gray-300'>
                <h1 className='font-bold text-center'>brainstorming</h1>
                <p className='text-center'>explore new perspectives</p>
              </div>
            </div>
        </div>
       
    </div> 
  )
}
