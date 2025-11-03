import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center font-semibold h-screen text-xl">
      <div className="animate-spin rounded-full w-12 h-12 border-t-4 border-blue-400"></div>  
      <h1 className="mt-20">Loading...</h1>
    </div>
  )
}

export default Loading
