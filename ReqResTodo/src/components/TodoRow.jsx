import React, { useState } from 'react'

const TodoRow = ({task, checked, completeList, setCompleteList}) => {
    const [done, setDone] = useState(checked);
    const handleChange = (event) => {
        console.log(event.target.checked);
        setDone(event.target.checked);
        let newList = [...completeList];
        newList.push(task);
        setCompleteList(newList);
    }
  return (
    <div className='my-2 text-gray-600 '>
        {!done && 
        <div className='flex gap-x-2 text-sm font-semibold'>
        <input onChange={handleChange}
        className='accent-red-500 w-4' checked={checked} type="checkbox" id="check"/>
        <label className='sr-only' htmlFor='check' >Checkbox</label>
        <p>{task}</p>
    </div>
    }

    </div>
    
    
  )
}

export default TodoRow