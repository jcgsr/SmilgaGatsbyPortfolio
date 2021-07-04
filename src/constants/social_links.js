import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaWhatsappSquare className="social-icon"></FaWhatsappSquare>,
    url:
      "https://api.whatsapp.com/send?phone=5579988284730&text=Entrar em contato",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/jcgsr",
  },

  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://br.linkedin.com/in/cabralguerra?trk=profile-badge",
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://facebook.com/cabral8guerra",
  },

  {
    id: 5,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/cabralguerra/?hl=pt-br",
  },
  {
    id: 6,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/teufel8?ref_src=twsrc%5Etfw",
  },
]

export default data
