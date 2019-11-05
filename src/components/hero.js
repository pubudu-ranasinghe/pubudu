import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  padding: 3.5rem 1rem;
  font-size: 1.8rem;
  font-weight: light;
  color: #0f1013;
  line-height: 1.3;
`

const Hero = () => (
  <Title>
    Hello!
    <br />
    I'm Pubudu. A developer with a passion for design from Sri Lanka. I
    write about tech.
  </Title>
)

Hero.propTypes = {}

Hero.defaultProps = {}

export default Hero
