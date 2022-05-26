import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic09 from '../../assets/images/pic09.jpg'

const BlogPage = ({data}) => (

    <Layout>
        <Helmet>
            <title>Blog - Mary Ojo</title>
            <meta name="description" content="Blog" />
        </Helmet>

        <BannerLanding name="Blog"/>

        <div id="main">
            <section id="two" className="spotlights">
            {
                data.allHashNodePost.nodes.map((node) => (
                    <section>
                    <Link to={`/blog/${node.slug}`} className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>{node.title}</h3>
                            </header>
                            <p>{node.brief}</p>
                            <ul className="actions">
                                <li><Link to={`/blog/${node.slug}`} className="button">Read more</Link></li>
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
  query  {
    allHashNodePost {
      nodes {
        childMdx {
          body
        }
        title
        slug
        brief
      }
    }
  }  
  `

export default BlogPage