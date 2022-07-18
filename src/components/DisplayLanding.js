import React from 'react'
import { Link } from 'gatsby'

const DisplayLanding = ({name}) => (
    <section id="bannerDisplay" className="style2">
        <div className="inner">
            {/* <header className="major">
                <h1>{name}</h1>
            </header>
            <div className="content">
                <p>Lorem ipsum dolor sit amet nullam consequat<br />
                sed veroeros. tempus adipiscing nulla.</p>
            </div> */}
            <div className='displaybuttons'>
            <ul className="actions">
                <li><Link to="/generic" className="button special">View Prototype</Link></li>
            </ul>
            <ul className="actions">
                <li><Link to="/generic" className="button special">View Process Book</Link></li>
            </ul>
            </div>
            
        </div>
    </section>
)

export default DisplayLanding
