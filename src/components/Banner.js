import React from 'react'
import hand from '../assets/images/Hellohand.png'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, I'm Mary 
                <img src={hand}  width={100}/>
                </h1>
            </header>
            <div className="content">
                <p>I'm passionate about designing & developing 
                <br/>digital experiences that are inclusive,  
                <br/>and sustainable</p>
                <ul className="actions">
                    <li><a href="/about" className="button next scrolly">Read More</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
