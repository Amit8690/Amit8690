import React from "react"
import { useState } from "react"

function ShoppingCart() {
    const [content, setContent] = useState("");
    const [tasks , setTasks]=  useState([]);
function handleItem (e){
         setContent(e.target.value);
}
function handleAddItem ()
{
    const newArr = [];
    if(content){
    newArr = [...tasks, content];
    setTasks(newArr);}

}
    return (
    <><div>
            <h1>Hello React</h1>
            <input
                type="text"
                value={content}
                onChange={handleItem} />
            <button onClick={handleAddItem}>Add item </button>
        </div><div><ul><li>{tasks.map(task)  {
            
        }}
            </li></ul></div></>
       
)

}

export default ShoppingCart