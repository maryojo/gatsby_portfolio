import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { MDXProvider } from "@mdx-js/react"


import pic11 from '../../assets/images/pic11.jpg'

const BlogPost = ({data}) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>{data.hashNodePost.title}</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>{data.hashNodePost.childMdx}</p>
                </div>
            </section>
        </div>

    </Layout>
)

export const query = graphql`
  query {
    hashNodePost(childMdx: {rawBody: {ne: " "}}) {
      title
      slug
    }
  }
  `

export default BlogPost