import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob(sort: { fields: created_at, order: DESC }) {
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJob: { nodes: jobs }, // alias
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="experiência" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        mais informações
      </Link>
    </section>
  )
}

export default Jobs
