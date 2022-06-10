import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Markdown from '../../components/markdown'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { MDXProvider } from "@mdx-js/react"


import pic11 from '../../assets/images/pic11.jpg'

const BlogPost = ({data}) => (
    <Layout>
        <Helmet>
            <title>{data.hashNodePost.title}</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner blogpost">
                    <header className="major">
                        <h1>{data.hashNodePost.title}</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <Markdown>{data.hashNodePost.childMdx.body}</Markdown>
                </div>
            </section>
        </div>

    </Layout>
)

export const query = graphql`
  query ($id: String) {
    hashNodePost(id: {eq: $id}){
      childMdx {
        body
        id
      }
      title
    }
  }
  `

export default BlogPost