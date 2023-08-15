import { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import TaskList from "./TaskList";
export default function Task({taskName, state, todos, id})
{

//Cree un hook para controlar el estado de la lista de tareas en checkbox, le asigno el estado que esta en el arreglo original
	const[checkState, setcheckState]=useState(state)
	console.log(todos)

//Cree una funcion para cambiar el estado de mi lista cuando marco el checkbox
	const checkChange=(state) => {
		let newState
		
		if (state==true){
			newState=false
		}
		else {
			newState=true
		}
		setcheckState(newState)
		
		todos[id-1].state=newState	
		
	}
//Cree el useEffect para que funcione cuando hago un cambio en el checkbox checkState
	useEffect(()=>{
        const newTaskList=JSON.stringify(todos)
		window.localStorage.setItem("listStorage",newTaskList)
		
    }, [ checkState ])


	return(
		<div 
		className="container">
		<div 
		className="lista">
{/*En el evento onChange del checkbox llamo la funcion para cambiar el estado*/ }
		<div>
			<input checked={checkState} type="checkbox" onChange={()=>checkChange(checkState)}></input>
		</div>
{/*Envio el parametro del estado al estilo. Si se cumple me llamara el id de tachado de lo contrario queda sin cambios */ }			
		<div>
				<p className={`${checkState? 'tachado':''}`}>{taskName}</p>
			</div>	
		</div>
		
		<div>
		<button 
			className="button"><HiPencil 
			className="icons"/></button>
		</div>

		<div>
			<button 
			className="button"><FaTrashCan 
			className="icons"/></button>
		</div>
			
		</div>
	)

}
	