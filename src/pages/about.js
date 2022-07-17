import React, {useState} from 'react'
import Helmet from 'react-helmet'
import ReactTooltip from 'react-tooltip'
import Layout from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'
import pic01 from '../assets/images/ITpic2.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import mypic from '../assets/images/Mary.jpg'
import resume from '../assets/files/resume.pdf'
import {TbBrandJavascript} from 'react-icons/tb'
import {RiReactjsLine, RiGatsbyFill, RiGithubFill, RiUserSearchFill, RiHtml5Fill, RiCss3Fill} from 'react-icons/ri'
import {SiMicrosoftazure, SiPython, SiFramer, SiTailwindcss, SiBootstrap, SiGraphql, SiHtml5} from 'react-icons/si'
import {FaLinux, FaFigma, FaCss3Alt} from 'react-icons/fa'
import {BiMobileVibration} from 'react-icons/bi'
import { Rating } from 'react-simple-star-rating'

const About = () => (
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
                        <div className='col-12 layout1 '>
                            <div className="image left mypic"><img className="pic" src={mypic} alt="" /></div>
                            <div>
                            <p className='intro'>Hi, I'm Mary. I am a recent graduate of Computer Science with Economics. In the past few years, I have gained project and internship experience in the field of Software Engineering, Human Computer Interaction and High Performance Computing. I love to design and develop inclusive digital experiences. I love to learn and explore new things in Tech and I also love to solve problems around me using my skills.
                            <p>It's so nice to have you here! Send me a message if you have any feedback, comments or questions.</p>
                            <p>Thank you!</p> 
                            </p>
                            <ul className="actions">
                                <li><a href={resume} className="button icon fa-eye" target="_blank">View resume</a></li>
                            </ul>
                            </div>
                       
                        </div>
                    </div>
                    <div> </div>

                    <div className="grid-wrapper">
                        <div className="col-12">
                            {/* <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p> */}
                        </div>
                        </div>
                        <div className="box alt">
                        {/* <h3>My Activity Feed</h3> */}
                                    {/* <div className="grid-gallery"> */}
                                        {/* <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div> */}
                                        {/* <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div> */}
                                    {/* </div> */}
                                    <h3>My Skills</h3>
                                    <div className='skillset'>
                                       <ul className='skilllist'>
                                        <li><TbBrandJavascript/>JavaScript  <Rating initialValue={5} readonly size={22}/></li>
                                        <li><RiCss3Fill/>CSS3  <Rating initialValue={5} readonly size={22}/></li>
                                        <li><RiReactjsLine color=''/>React.js  <Rating initialValue={5} readonly size={22}/></li>
                                        <li><RiGatsbyFill/>Gatsby.js  <Rating initialValue={5} readonly size={22}/></li>
                                        <li><FaLinux/>Linux/UNIX  <Rating initialValue={5} readonly size={22}/></li>
                                        <li><SiMicrosoftazure/>Azure  <Rating initialValue={4} readonly size={22}/></li>
                                        <li><RiGithubFill/>Github</li>
                                        <li><SiPython/>Python</li>
                                       </ul>
                                       <ul className='skilllist'>
                                        <li><FaFigma/>Figma</li>
                                        <li><SiFramer/>Framer</li>
                                        <li><RiUserSearchFill/>User Research</li>
                                        <li><SiTailwindcss/>Tailwind CSS</li>
                                        <li><SiBootstrap/>BootStrap</li>
                                        <li><BiMobileVibration/>Prototyping</li>
                                        <li><SiGraphql/>GraphQL</li>
                                        <li><RiHtml5Fill/>HTML5</li>
                                       </ul> 
                                    </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>
        </div>

    </Layout>
)

export default About