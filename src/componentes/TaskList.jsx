import { AiFillPlusCircle } from "react-icons/ai";
import Task from "./Task";
export default function TaskList({todos}){
    return(
        <div className="container2">
            <div>
                
                <input type='text'></input>
                <button 
                className="button"
                ><AiFillPlusCircle 
                className="icons"/></button>
            </div>
            {todos.map(todo => <Task
            taskName={todo.task} state={todo.state}></Task>)}
        </div>
    )
}
