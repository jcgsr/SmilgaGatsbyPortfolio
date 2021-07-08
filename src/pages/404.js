import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Página Inexistente" />

      <main className="error-page">
        <error className="container">
          <h1>beco sem saída...</h1>
          <Link to="/" className="btn">
            home
          </Link>
        </error>
      </main>
    </>
  )
}

export default Error
