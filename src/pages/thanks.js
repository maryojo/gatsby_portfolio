import React from 'react'
import Layout from '../components/layout'
import image from '../assets/images/thanks.png'

const Thanks = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
              <img src={image} width={100}/>
              <div>
                <h1>Thanks for reaching out!</h1>
                <p>You would hear back from me soon</p>
                <ul className="actions">
                            <li><a href="/" className="button icon fa-home">Go to Home</a></li>
                        </ul>
              </div>
            </div>
        </section>
    </div>
  </Layout>
)

export default Thanks
