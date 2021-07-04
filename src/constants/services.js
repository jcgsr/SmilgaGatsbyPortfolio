import React from "react"
import { FaCode, FaAndroid } from "react-icons/fa"
import { HiTranslate } from "react-icons/hi"
import { IoSchool } from "react-icons/io5"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Comecei a estudar Python, Java e C em 2015 (e ainda continuo estudando essas linguagens) por hobby e, com isso, adquiri experiência no básico de lógica de programação. Foi desenvolvendo meu primeiro site em Flask (2019) que entrei em contato com HTML. Depois disso, não mais parei de estudar e aprender front-end development. Depois de dominar JavaScript, HTML5 e CSS3, estou me dedicando ao estudo do React e do Vue.`,
  },
  {
    id: 2,
    icon: <HiTranslate className="service-icon" />,
    title: "tradução",
    text: `03 anos de experiência com tradução no par Inglês-Português. Traduzo abstracts, livros, documentos. Software para tradução: OmegaT, Trados e Smartcat. Também trabalho com legendagem. Pós-graduado em Tradução na Fanese.`,
  },
  {
    id: 3,
    icon: <IoSchool className="service-icon" />,
    title: "ensino",
    text: `Dei aula de Inglês (cursinhos e particular) de 2006 a 2013. Ainda em 2013, ingressei no ensino público, no qual estou até hoje como professor concursado nos municípios de Riachuelo e de Lagarto em Sergipe.`,
  },
]

export default services
