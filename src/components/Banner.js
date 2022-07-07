import React from 'react'
import hand from '../assets/images/Hellohand.png'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="content">
                <h1>Hi, I'm Mary 
                <img src={hand} className="hand"/>
                </h1>
            </header>
            <div className="bannerContent">
                <p>I'm passionate about designing & developing digital 
                <br/>experiences that are inclusive, sustainable and human centered.
                <br/>
                <br/>I am currently working on this.
                <br/>Check out my other projects below</p>
                {/* <ul className="actions"> */}
                    {/* <li><a href="/about" className="button next scrolly">Read More</a></li> */}
                {/* </ul> */}
            </div>
        </div>
    </section>
)

export default Banner
