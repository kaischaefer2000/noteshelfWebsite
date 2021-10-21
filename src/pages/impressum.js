import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

const ImpressumPage = () => (
  <Layout>
    <Header active="none" />
    <div className="pl-5 pb-10">
      <h1>Impressum</h1>
      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Kai Sch&auml;fer
        <br />
        Auenstra&szlig;e 47
        <br />
        97456 Dittelbrunn
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 174 3529716;
        <br />
        E-Mail: kai305@web.de
      </p>
    </div>
  </Layout>
)

export default ImpressumPage
