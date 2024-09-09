import PropTypes from "prop-types";
import "./Card.css";

function Card({title,language,handleDelete,index, setMoveableCard}) {
    return ( 
        <div className="cards" draggable onDragStart={()=>setMoveableCard(index)} onDragEnd={()=>setMoveableCard(null)}>
            <p>Todo: {title}</p>
            <p>Language: {language}</p>
            <button onClick={()=>handleDelete(index)}>Delete</button>
        </div>
     );
}



export default Card;