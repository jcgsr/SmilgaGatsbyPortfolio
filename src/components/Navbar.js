import React from "react"
import logo from "../assets/images/jovane.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="web dev" styles={{ height: "10px" }} />
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            const { id, url, text } = link
            return (
              <Link key={id} to={url}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
