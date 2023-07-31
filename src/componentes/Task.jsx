import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
export default function Task({taskName, state})
{
	return(
		<div 
		className="container">
		<div 
		className="lista">

		<div>
			<input checked={state} type="radio"></input>
		</div>
			
		<div>
				<p className={`${state? 'tachado':''}`}>{taskName}</p>
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
	