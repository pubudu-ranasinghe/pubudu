import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  padding: 1rem;
  display: inline-block;
  text-decoration: none;
  color: #0f1013;
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  color: #0f1013;
`

const LogoLink = styled(Link)`
  padding: 1rem;
  display: inline-block;
  text-decoration: none;
  color: #0f1013;
  font-weight: bold;
`

const Header = ({ siteTitle }) => (
  <Nav>
    <LogoLink to="/">{siteTitle}</LogoLink>
    <span>
      <StyledLink href="https://github.com/pubudu-ranasinghe">github</StyledLink>/
      <StyledLink href="https://www.linkedin.com/in/pubuduranasinghe/">
        linkedin
      </StyledLink>
      /<StyledLink href="https://medium.com/@42">medium</StyledLink>
    </span>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
