/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";

export default function Task({todos, descripcion, taskName, state, id, handleDeleteTask, handleUpdateTask, modifyState})
{
//Cree un hook para controlar el estado de la lista de tareas en checkbox, le asigno el estado que esta en el arreglo original
	const[checkState, setcheckState]=useState(state)
//Cree una funcion para cambiar el estado de mi lista cuando marco el checkbox
	const checkChange=(state) => {
		let newState
		if (state==true){
			newState=false
		}
		else {
			newState=true
		}
		

		modifyState(id)
		setcheckState(newState)
	}
	
//Cree el useEffect para que funcione cuando hago un cambio en el checkbox checkState
	useEffect(()=>{
        const newTaskList=JSON.stringify(todos)
		window.localStorage.setItem("listStorage",newTaskList)
    }, [todos,checkState]) 
	return(
		<div className="container" key={id}>

			
		<section className="lista">

		
{/*Envio el parametro del estado al estilo. Si se cumple me llamara el id de tachado de lo contrario queda sin cambios */ }			
		
				<p className={`${checkState? 'tachado':''}`}>{taskName}</p>
				<p className="apunte">{descripcion}</p>
			
		</section>
		<div className="botones">	{/*En el evento onChange del checkbox llamo la funcion para cambiar el estado*/ }
		
		<button className="button"> <input checked={checkState} type="checkbox" onChange={()=>checkChange(checkState)}></input></button>
{/* Cree los botones de modificar y eliminar */}
		<section>
		<button
			onClick={()=>handleUpdateTask(id, taskName, descripcion, checkState)}
			className="button"><HiPencil 
			className="icons"/></button>
		</section>
		<section className="">
		
			
			<button
			onClick={()=>handleDeleteTask(id)} 
			className="button"><FaTrashCan 
			className="icons"/></button>
		</section>
		</div>
		</div>
	)

}
	