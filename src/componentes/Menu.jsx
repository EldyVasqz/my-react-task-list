import { Link } from "react-router-dom";

function Menu (){
    return (
        <div className="menu2">

        <ul className="menu">
            <li >
          <Link to="/home">BIENVENIDA</Link>
            </li>
            <li >
          <Link to="/SobreNosotros">CONOCENOS</Link>
            </li>
            <li>
          <Link to="/Tareas">MIS TAREAS DEL DIA </Link>
            </li>
      </ul>
      </div>
    );
}

export {Menu}