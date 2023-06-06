import React from 'react'

const Header = () => {
  return (
    <div className='w-[85%] mx-auto mt-12 flex justify-between'>
        <h3 className=' text-3xl font-bold'>Things to get done</h3>
        <button className='px-4 py-2 hover:bg-red-600 bg-red-500 text-white rounded-md font-semibold shadow-md'>Refresh</button>
    </div>
  )
}

export default Header;