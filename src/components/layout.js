/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import constants from "../constants"
import "./layout.css"

const Container = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: ${constants.primaryMargin / 2}rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <footer
        style={{ padding: "0 1rem", marginBottom: "1rem", color: "#bababa" }}
      >
        © {new Date().getFullYear()}
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
