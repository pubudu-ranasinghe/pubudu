import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import constants from "../constants"

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #0f1013;
  padding: ${constants.primaryMargin}rem;

  @media (min-width: 768px) {
    padding: ${constants.primaryMarginMd}rem;
  }
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  color: #0f1013;
`

const LogoLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #0f1013;
  font-weight: bold;
  padding: ${constants.primaryMargin}rem;

  @media (min-width: 768px) {
    padding: ${constants.primaryMarginMd}rem;
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <LogoLink to="/">{siteTitle}</LogoLink>
    <span>
      <StyledLink href="https://github.com/pubudu-ranasinghe">
        github
      </StyledLink>
      /
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
