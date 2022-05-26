import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import resume from '../assets/files/resume.pdf'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>Hi, I'm Mary! - Mary Ojo</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Meet Me</h1>
                    </header>
                    <div className='grid-wrapper'>
                        <div className='col-12'>
                        <p><span className="image left"><img src={pic09} alt="" /></span><blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>
                        <ul className="actions">
                            <li><a href={resume} className="button icon fa-eye" target="_blank">View resume</a></li>
                        </ul>
                        </p>

                        </div>
                        
                    </div>
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <h3>Sem turpis amet semper</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                        </div>
                        <div className="box alt">
                                    <div className="grid-wrapper">
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                    </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>
        </div>

    </Layout>
)

export default About