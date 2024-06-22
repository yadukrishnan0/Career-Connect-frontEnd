import React from 'react'

function Button({label,handleClick}) {
  return (
    <button className="w-full md:w-auto px-6 py-2 bg-customBlue text-white font-roboto font-medium text-[.9rem] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={handleClick}>
        {label} 
      </button>
  )
}

export default Button;