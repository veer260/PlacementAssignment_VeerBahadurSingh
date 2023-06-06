import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './AddTodo'
import Form from './Form'
import TodoRow from './TodoRow'

const TodoList = ({list, setList, completeList, setCompleteList}) => {
  return (
    <div className='w-[85%] mx-auto mt-8'>
        <h3 className='font-semibold text-xl'>Things to do</h3>
        {
            list.map((task,index) => (
                <TodoRow key={index} task={task} checked={false} completeList={completeList} setCompleteList={setCompleteList} />
            ))
        }
        <Routes>
            <Route path='/' element={ <AddTodo />}></Route>
            <Route path='/addForm' element={<Form list={list} setList={setList}/> }></Route>
        </Routes>
    </div>
  )
}

export default TodoList