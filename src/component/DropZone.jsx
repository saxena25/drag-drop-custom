function DropZone({onDrop}) {
    return ( 
        <>
            <div onDrop={()=>onDrop()} onDragOver={(e)=>e.preventDefault()} >Drop here...</div>
        </>
     );
}

export default DropZone;