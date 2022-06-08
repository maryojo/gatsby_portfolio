import React from 'react'
import Layout from '../components/layout'
import image from '../assets/images/404.png'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
              <img src={image} width={250}/>
              <div>
                <h1>NOT FOUND</h1>
                <p>Uh Oh! You just hit a route that doesn&#39;t exist... the sadness.</p>
              </div>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
