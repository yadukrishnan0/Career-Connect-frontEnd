import React from 'react'

function Button({label,childern}) {
  return (
    <button
    className="border-2  text-customBlue font-bold py-2 px-4 rounded"
  >
   {childern}
  </button>
  )
}

export default Button;