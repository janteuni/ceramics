import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"


const Home = ({ data }) => {
console.log(data)
  return (
    <div className="full-container full-height flex flex-column">
      <Img
        fluid={data.logo.childImageSharp.fluid}
        alt="Jasmine Ceramics Logo"
        style={{width: "130px", marginLeft: "auto", marginRight: "auto"}}
      />
      <div className="flex">
        <div className="flex-grow flex flex-center flex-column align-center">
          <div className="title">
            <h1>La boutique en ligne ouvre bientôt</h1>
            <h2>Inscrivez-vous pour être notifié</h2>
          </div>    
          <iframe
            src="https://d8cb2fc7.sibforms.com/serve/MUIEAMVOJ6SgMjZISqkBOqsWeI4wYLjqQnt_xUHejO0-yEqpRFXt9In54eZxa6iU9Rdu7MTSLbKAbzlBM-MQt979AdFMYOt6Vnf9tikb5O0PIOjLu3I1Q96dWB6Q8pFvDaC-xLwp13BgSsqccaELRb4aWyJCzH48mMJReOT1TyE4omLD-vXIcNZdovB5CnbLqGfKDHeAKmDcoiDc"
            title="newsletter"
            frameborder="0"
            scrolling="auto"
            allowfullscreen
            style={{
              display: "block",
            }}
          ></iframe>
          <Link to="/collection" >
            Voir toute la collection
          </Link>
        </div>
        <div className="imgHome flex-grow">
          <Img
            fluid={data.tasse.childImageSharp.fluid}
            alt="Jasmine Ceramics Logo"
          />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "jasmine-ceramics.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
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
