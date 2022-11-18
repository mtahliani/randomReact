// TODO:
// 1. Make the page available through Routing and Navigation
// 2. Use list ["item1", "item2", "item3", "item4", "item5", "item6"] to construct and display a todo list
//             to-do list
//              {item1}
//              {item2}
//              {item3}
//              {item4}
//              {item5}
//              {item6}
// 3. Add add item to list function -> take a string from an input and add it to the todo list
// 4. Add finish item function -> detect a click on an item and delete that item from the todo list

import {useState} from "react";
import NavigateButton from "./buttons/Navigate";
const Dashboard = () => {
    const [todoList, setTodoList] = useState(["item1", "item2", "item3", "item4", "item5", "item6", "item7"]);
    const [newItem, setNewItem] = useState("");
    const deleteItem = (event) => {
        setTodoList(prev => {
            return prev.filter(each => each !== event.target.id)
        })
    }

    const handleNewItem = (event) => {
        setNewItem(event.target.value);
    }

    const handleAddItem = () => {
        setTodoList(prev => {
            return [...prev, newItem]
        });
        setNewItem("");
    }

    return (
        <div className={"flex flex-col"}>
            <h1 className={"text-center"}>To Do List</h1>
            {todoList.map(each => <h1 key={each} id={each} className={"text-center my-4 border-2 border-gray-700 w-1/2 mx-auto"} onClick={deleteItem}>{each}</h1>
            )}
            }
            <input className={"text-center my-4 border-2 border-gray-700 w-1/2 mx-auto"} onChange={handleNewItem} value={newItem}></input>
            <NavigateButton buttonText={"add"} buttonFunction={handleAddItem}></NavigateButton>
        </div>
    )
}

export default Dashboard






