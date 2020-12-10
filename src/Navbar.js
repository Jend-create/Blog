import React from 'react'
//import "./styles.css"
import {Link} from "react-router-dom"

function Navbar() {
    // const {isLoggedin, setLogin} = useState(false)
    return (

<nav className= " nav navbar navbar-expand-lg navbar-light bg-lightblue margin-0 10px bg-size-cover">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="navbar-brand" to="/">Home</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/contactus">Contact Us <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/myblog">Blog-Me</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Signup</Link>
      </li>
      
    </ul>
  </div>
</nav>
    )
    }
export default Navbar
