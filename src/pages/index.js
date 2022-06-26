// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { title } from '../components/my-component.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
