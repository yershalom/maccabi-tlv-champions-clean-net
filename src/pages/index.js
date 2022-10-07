import * as React from 'react'
import Days from '../components/days'
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div><Days/></div>
    </Layout>
  )
}

export const Head = () => <title>Maccabi Tel Aviv Champions League Clean Net</title>

export default IndexPage
