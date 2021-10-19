import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Benefits from '../components/benefits'
import Features from "../components/features"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="bg-gray-100 p-10">
      <h2 id="benefits" className="text-center mb-10">
        Alle deine Notizen & Learnings auf einem Blick
      </h2>
      <Benefits />
    </div>
    <Features />
  </Layout>
)

export default IndexPage