 import React from 'react'
import DoneRow from './DoneRow'
 
 const DoneList = ({doneList, setDoneList, incompleteList, setIncompleteList}) => {
    console.log('donelist:', incompleteList)
   return (
     <div className='w-[85%] mx-auto'>
        <h3 className='font-semibold text-xl my-4'>Things done</h3>
        {
           doneList.map((task, index) => {
            return (
                <DoneRow task={task} key={index} checked={true} incompleteList={incompleteList} setIncompleteList={setIncompleteList} />
            )
           }) 
        }
     </div>
   )
 }
 
 export default DoneList