import React from 'react'

function Buttons({setFlag}) {
  return (
    <div className='flex justify-center space-x-4'>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setFlag(false)}
    >
      Day Mode
    </button>
    <button
      className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      onClick={() => setFlag(true)}
    >
      Night Mode
    </button>
  </div>
  )
}

export default Buttons