import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects }, // alias
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="projetos em destaque" showLink projects={projects} />
      </main>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`
export default IndexPage