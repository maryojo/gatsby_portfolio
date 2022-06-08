import React from 'react'
import Layout from '../components/layout'
import image from '../assets/images/thanks.png'

const Thanks = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
              <img src={image} />
              <div>
                <h1>Thanks for reaching out!</h1>
                <p>You would hear back from me soon</p>
              </div>
            </div>
        </section>
    </div>
  </Layout>
)

export default Thanks