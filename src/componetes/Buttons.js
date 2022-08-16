import { Link } from "react-router-dom";

const Botones = (props) => {

  if (props.type === "NavBar") {
    return (
      <nav>
        <Link to="/categoria/bikinis">Bikinis</Link>
        <Link to="/categoria/enterizas">Enterizas</Link>
        <Link to="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
      </nav>
    )
  }else{
    return (
      <nav>
        <Link to="#">Enterizas</Link>
        <Link to="#">Redes Sociales</Link>
        <Link to="#">Bikinis</Link>
      </nav>
    )
  }
}

export default Botones;