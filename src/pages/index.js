import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import Hero from "../components/hero"

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            subtitle
            color
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Pubudu" />
      <Hero />
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <Article
          key={i}
          title={node.frontmatter.title}
          sub={node.frontmatter.subtitle}
          full={i === 0}
          align={i === 0 ? "start" : "end"}
          color={node.frontmatter.color}
          link={node.frontmatter.path}
        />
      ))}
      <Article
        title="Interested in my work?"
        sub="Feel free to contact me at pubudutr@gmail.com"
        align="center"
        color="#FF441F"
      />
    </Layout>
  )
}

export default IndexPage
