import {useState} from "react";
import NavigateButton from "./buttons/Navigate";

const NewDashBoard = () => {

    const [todoList, setTodoList] = useState(["item1", "item2", "item3", "item4", "item5", "item6"]);
    const [newItem, setNewItem] = useState("");

    const listStyle = "text-center mx-auto w-1/2 border-2 my-4"

    const deleteItem = (event) =>{
        setTodoList(prev => {
            return (
                prev.filter(each => each !== event.target.id)
            )
        })
    }

    const handleNewItem = (event) => {
        setNewItem(event.target.value);
    }
    const addItem = () =>{
        setTodoList(prev => {
            return [...prev, newItem];
        })
        setNewItem("");

    }
    return (
        <div className={"flex flex-col border-4 mx-32 mt-4"}>
            {todoList.map(each => <h1 className={listStyle} onClick={deleteItem} id={each}> {each}</h1>)}

            <input className={"text-center my-4 border-2 border-gray-700 w-1/2 mx-auto"} onChange={handleNewItem} value={newItem}></input>

            <NavigateButton buttonFunction={addItem} buttonText={"Add item"}></NavigateButton>
        </div>
    )
}

export default NewDashBoard