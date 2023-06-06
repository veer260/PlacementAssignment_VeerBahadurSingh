import React, { useState } from 'react'
import DoneList from './DoneList';
import Header from './Header';
import TodoList from './TodoList';

const Content = () => {
    console.log('content running');
    const [incompleteList, setIncompleteList ] = useState([
        'Clean my Computer',
        'Buy a keyboard'
    ])
    const [completeList, setCompleteList] = useState([
        'Write an article'
    ]);

  return (
    <div>
        <Header />
        <TodoList list={incompleteList} setList={setIncompleteList} completeList={completeList} setCompleteList={setCompleteList} />
        <DoneList doneList={completeList} setDoneList={setCompleteList} incompleteList={incompleteList} setIncompleteList={setIncompleteList} />
    </div>
  )
}

export default Content