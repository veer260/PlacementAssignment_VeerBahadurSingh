import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Form = ({list, setList}) => {
    const [ task, setTask] = useState('');
    // const  = '/';
    let target = '/addForm';
    if(task) {
        target = '/'
    }
    
    console.log('task:',task)
    const handleClick = () => {
        console.log('hello');
    }

    const handleChange = (event) => {
        setTask(event.target.value)
    }

    const handleSave = () => {
        console.log('handleSave running')
        let newlist = [...list];
        if(task) {
            newlist.push(task);
        }
        
        console.log('newList:', newlist)
        setList(newlist);
        console.log('list:', list);
    }
  return (
    <div className='flex flex-col gap-y-6 my-4 border shadow-sm p-4 rounded-md font-semibold '>
        <h3>Create a todo  </h3>

        <input
        value={task}
        onChange={handleChange}
        className='shadow-sm border rounded-md p-2 w-80 placeholder-gray-300 ' 
        placeholder='Write an article about XState' type="text" />

        <div className='flex gap-x-4'>
            <Link onClick={handleSave} 
            className='px-4 py-1 hover:bg-red-600 bg-red-500 font-semibold text-white rounded-md shadow-sm ' to={target}>Save</Link>

            <Link className='px-4 py-1 border rounded-md shadow-sm' to={'/'} >Cancel</Link>
        </div>
    </div>
  )
}

export default Form