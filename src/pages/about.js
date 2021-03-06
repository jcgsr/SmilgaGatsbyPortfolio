import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data
  return (
    <>
      <Seo title="Sobre" />

      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={getImage(image.localFile)}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return (
                  <span key={item.id} class>
                    {item.title}
                  </span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
export const query = graphql`
  {
    strapiAbout {
      title
      info
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
  }
`
export default About
