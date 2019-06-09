import React from "react"
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const SuccessPage = () => (

   <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">Contact</h1>
  

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <span className="image main">
            Success
          </span>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </div>
</article>
  </Layout>
)

export default SuccessPage
