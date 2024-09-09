import { useState} from 'react';
import './App.css';
import Form from './component/Form';
import TodoColumn from './component/TodoColumn';

function App() {
  const [data, setData] = useState([]);
  const [moveableCard, setMoveableCard] = useState(null);

  const handleDelete = (todoIndex) =>{
    const filteredTodo = data.filter((todo,index)=> index !== todoIndex);
    setData(filteredTodo);
  }

  const onDrop = (status, position) =>{
    // console.log(moveableCard,status, position);
    if(moveableCard == null || moveableCard == undefined){
      return ;
    }

    const todoToMove = data[moveableCard];
    const updatedTodo = data.filter((todo, index)=>index !== moveableCard);
    updatedTodo.splice(position, 0,{
      ...todoToMove,
      status: status
    })

    setData(updatedTodo);
  }

  return (
    <>
      <div className='app-wrapper'>
        <Form setData={setData} />
        <div className="app">
          <TodoColumn  
            title="Todo"
            data={data}
            status="Todo"
            setMoveableCard={setMoveableCard}
            handleDelete={handleDelete}
            onDrop={onDrop}
          />
          <div className='divider'></div>
          <TodoColumn  
            title="Pending"
            data={data}
            status="pending"
            setMoveableCard={setMoveableCard}
            handleDelete={handleDelete}
            onDrop={onDrop}
          />
          <div className='divider'></div>
          <TodoColumn  
            title="Completed"
            data={data}
            status="completed"
            setMoveableCard={setMoveableCard}
            handleDelete={handleDelete}
            onDrop={onDrop}
          />
        </div>
      </div>
    </>
  )
}

export default App
