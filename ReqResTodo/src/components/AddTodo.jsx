import React from 'react';
import { FiPlus } from "react-icons/fi"
import { Link} from 'react-router-dom';

const AddTodo = () => {
  return (
    <Link to="/addForm"
    className='w-32 flex my-4 items-center bg-red-500 hover:bg-red-600 text-white rounded-3xl gap-x-2 px-4 font-semibold shadow-md text-sm py-2'> <FiPlus className=''></FiPlus> Add a note </Link>
  )
}

export default AddTodo