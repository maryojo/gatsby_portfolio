import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic09 from '../../assets/images/pic09.jpg'

const BlogPage = ({data}) => (

    <Layout>
        <Helmet>
            <title>Blog - MaryOjo</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding name="Blog"/>

        <div id="main">
            <section id="two" className="spotlights">
            {
                data.allHashNodePost.edges.map((edge) => (
                    <section>
                    <Link to={`/blogs/${edge.node.slug}`} className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>{edge.node.title}</h3>
                            </header>
                            <p>{edge.node.brief}</p>
                            <ul className="actions">
                                <li><Link to={`/blogs/${edge.node.slug}`} className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                ))
            }
           
                
            </section>
        </div>

    </Layout>
)

export const query = graphql`
  query {
    allHashNodePost {
      edges {
        node {
          brief
          slug
          title
        }
      }
    }
  }
  
  `

export default BlogPage