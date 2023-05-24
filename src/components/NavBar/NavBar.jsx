import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="contenedor-nav">
      <Link to={"/"}>
        <h1>Atomo Shop</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={`/categoria/2`}> Computadoras </NavLink>
          </li>

          <li>
            <NavLink to={`/categoria/3`}> Accesorios </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />

    </div>
  )
}

export default NavBar