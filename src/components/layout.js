import * as React from "react"
import { Link } from 'gatsby'
import "./layout.css"

const Layout = ({ children }) => {
 

  return (
    <>
      <main>{children}</main>
      <footer className="py-7 bg-gray-100">
        <div className="flex flex-row justify-center">
          <Link className="text-gray-600 text-sm" to="/impressum">
            Impressum
          </Link>
          <Link
            className="text-gray-600 pl-3 text-sm"
            to="/datenschutz"
          >
            Datenschutz
          </Link>
          <span className="text-gray-500 pl-5 text-sm">
            © {new Date().getFullYear()} Kai Schäfer
          </span>
        </div>
      </footer>
    </>
  )
}

export default Layout
