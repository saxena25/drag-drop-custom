import Card from "./Card";
import DropZone from "./DropZone";
import "./TodoColumn.css";

function TodoColumn({data,title,status,handleDelete, setMoveableCard, onDrop}) {
    return ( 
        <>
            <div className="column-wrapper">
                <h2 className="column-title">{title}</h2>
                <DropZone onDrop={()=>onDrop(status,0)} />
                {
                    data.map((todo,index)=>todo.status === status ? (
                        <div key={index}>
                            <Card 
                                title={todo.todo}
                                language={todo.language}
                                handleDelete={handleDelete}
                                index={index}
                                setMoveableCard={setMoveableCard}
                            />
                            <DropZone onDrop={()=>onDrop(status, index + 1)}/>
                        </div>
                    ): null)
                }
            </div>
        </>
     );
}


export default TodoColumn;