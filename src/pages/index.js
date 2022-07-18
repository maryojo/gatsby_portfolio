import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import Aos from 'aos'
import 'aos/dist/aos.css'

import pic01 from '../assets/images/screens1.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

import pic04 from '../assets/images/netflix-cover.jpg'



const HomeIndex = () => {

    useEffect(()=>{
        Aos.init({ duration: 1200 })
      }, [])

    // render() {
        return (
            <Layout>
                <Helmet
                    title="Mary Ojo"
                    meta={[
                        { name: 'description', content: 'My Portfolio' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article data-aos="fade-up" style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Artaine</h3>
                                <p>UI/UX - Prototyping</p>
                            </header>
                            <Link to="/casestudy" className="link primary"></Link>
                        </article>
                        <article data-aos="fade-up"  style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Cade</h3>
                                <p>UI/UX - Frontend</p>
                            </header>
                            <Link to="/casestudy" className="link primary"></Link>
                        </article>
                        <article data-aos="fade-up" style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>My Spaces</h3>
                                <p>UI/UX - Prototyping</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article data-aos="fade-up" style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Netflix Clone</h3>
                                <p>Frontend</p>
                            </header>
                            <a rel="noreferrer" href="https://sprightly-torrone-a6b3ec.netlify.app/" target="_blank" className="link primary"></a>
                        </article>
                        <article data-aos="fade-up" style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Notted</h3>
                                <p>UI/UX - Frontend</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article data-aos="fade-up"  style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Signify</h3>
                                <p>UI/UX</p>
                            </header>
                            {/* <Link to="/display" className="link primary"></Link> */}
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Thoughts</h2>
                            </header>
                            <blockquote>Every great design begins with an even better story." -- Lorinda Mamo, designer</blockquote>
                            {/* <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul> */}
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
// 



export default HomeIndex