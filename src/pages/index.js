import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const Home = ({ data }) => {
  console.log(data)
  return (
    <div className="full-container full-height flex small-column flex-center align-center">
      <div className="flex-grow flex flex-center flex-column align-center">
        <div className="title">
          <h1 className="flex align-center">
            <div style={{ height: "45px" }}>Jasmine</div>
            <div className="sub"> | Ceramics</div>
          </h1>
          <h2>La boutique en ligne ouvre bientôt</h2>
          <h3>Inscrivez-vous pour être notifié</h3>
        </div>
        <iframe
          src="https://d8cb2fc7.sibforms.com/serve/MUIEAIN7zaAkBMrAssICdHPIeY7EI7tfIc5PdLo9SDSLAiJbr_6_l1p2m5gpv-uP8vtsmCEKpofRgmSxuSX71NIrmbuuaCOU9k1NdUZSguRVDpJFG4V4uU6t69wvNs30FqRh3qNX8ebwII0fsEB6gO7ODxUvFkj8-7IFnRzKN50ELauVi3SCIsodnIsacamjs4u9xhi7VYJ2D9HB"
          title="newsletter"
          frameborder="0"
          scrolling="auto"
          allowfullscreen
          style={{
            display: "block",
          }}
        ></iframe>
      </div>
      <div className="imgHome flex-grow">
        <Img
          fluid={data.tasse.childImageSharp.fluid}
          alt="Jasmine Ceramics Logo"
        />
        <Link className="link" to="/collection">
          Voir toute la collection
        </Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "jasmine-ceramics.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tasse: file(relativePath: { eq: "mug-0008.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Home
