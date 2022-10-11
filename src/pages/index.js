import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Layout container>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage