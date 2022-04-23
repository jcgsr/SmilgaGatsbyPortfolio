import React from "react"
import { FaCode } from "react-icons/fa"
import { HiTranslate } from "react-icons/hi"
import { IoSchool } from "react-icons/io5"
import { AiFillAndroid } from "react-icons/ai"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Trabalho como freelancer há mais de 2 anos construindo sites totalmente responsivos em React, Gatsby ou Next, priorizando o SEO e a total comunicação com o cliente antes, durante e depois da entrega do site.`,
  },
  {
    id: 2,
    icon: <HiTranslate className="service-icon" />,
    title: "tradução",
    text: `4 anos de experiência com tradução no par Inglês-Português. Traduzo abstracts, livros, documentos. Software para tradução: OmegaT, Trados e Smartcat. Também trabalho com legendagem. Pós-graduado em Tradução pela Fanese (Sergipe).`,
  },
  {
    id: 3,
    icon: <IoSchool className="service-icon" />,
    title: "ensino",
    text: `Dei aula de Inglês (cursinhos e particular) de 2006 a 2013. Ainda em 2013, ingressei no ensino público, no qual estou até hoje como professor concursado nos municípios de Riachuelo e de Lagarto em Sergipe.`,
  },
  {
    id: 4,
    icon: <AiFillAndroid className="service-icon" />,
    title: "mobile",
    text: `Começando a me aventurar no mundo mobile com apps em React Native tanto para dispositivos Android como para iOS.`,
  },
]

export default services
