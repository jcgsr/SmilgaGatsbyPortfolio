import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <Seo title="Contatos" />

      <section className="contact-page">
        <article className="contact-form">
          <h3>entre em contato</h3>
          <form action="https://formspree.io/f/mrgrlwwg" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="nome"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="e-mail"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              enviar
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
