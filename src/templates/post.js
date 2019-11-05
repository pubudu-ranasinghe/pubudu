import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

const HeroImage = styled.div`
  height: 200px;
  background-color: ${props => props.color || "#fafafa"};
`

const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  margin: 0 !important;
`

const Subtitle = styled.h2`
  font-size: 1.2rem !important;
  padding: 0 0 0 1rem !important;
  margin-top: 0 !important;
  color: rgba(15, 16, 19, 0.5);
`

const Body = styled.article`
  padding: 1rem;
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="post" style={{ padding: "1rem" }}>
        <HeroImage color={frontmatter.color} />
        <Title>{frontmatter.title}</Title>
        <Subtitle>{frontmatter.subtitle}</Subtitle>
        <p style={{ padding: "0 1rem" }}>{frontmatter.date}</p>
        <Body>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Body>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        color
      }
    }
  }
`
