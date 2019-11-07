import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import constants from "../constants"

const Wrapper = styled.article`
  display: flex;
  padding: ${constants.primaryMargin / 2}rem;
  width: ${props => (props.full ? "100%" : "50%")};
`

const Body = styled.div`
  background-color: ${props => props.color || "#09d3ac"};
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.align === "end"
      ? "flex-end"
      : props.align === "center"
      ? "center"
      : "flex-start"};
`

const Title = styled.h2`
  padding: ${constants.primaryMargin}rem;
  padding-bottom: ${constants.primaryMargin / 2}rem;
  color: #fff;
  font-size: 1.2rem;
  word-break: break-word;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`

const Subtitle = styled.p`
  padding: ${constants.primaryMargin}rem;
  padding-top: 0;
  color: #fff;
  font-size: 1rem;
  word-break: break-word;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

const Article = ({ title, sub, link, align, full, color, external }) => (
  <Wrapper full={full}>
    {external ? (
      <a href={link} style={{ textDecoration: "none", width: "100%" }}>
        <Body align={align} color={color}>
          <Title>{title}</Title>
          <Subtitle>{sub}</Subtitle>
        </Body>
      </a>
    ) : (
      <Link to={link} style={{ textDecoration: "none", width: "100%" }}>
        <Body align={align} color={color}>
          <Title>{title}</Title>
          <Subtitle>{sub}</Subtitle>
        </Body>
      </Link>
    )}
  </Wrapper>
)

Article.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  link: PropTypes.string,
  align: PropTypes.string,
  full: PropTypes.bool,
  color: PropTypes.string,
  external: PropTypes.bool,
}

Article.defaultProps = {
  title: ``,
  sub: ``,
  align: `start`,
  link: `#`,
  external: false,
}

export default Article
