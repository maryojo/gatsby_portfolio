import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import DisplayLanding from '../components/DisplayLanding'

import { FaPeopleArrows, FaClock, FaSuitcase } from 'react-icons/fa'
import { RiFocus3Fill } from 'react-icons/ri'
import { HiLightBulb } from 'react-icons/hi'
import { MdImportantDevices } from 'react-icons/md'
import { BsClipboardData } from 'react-icons/bs'
import { BiTask } from 'react-icons/bi'

import pic08 from '../assets/images/pic08.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

let iconStyles = { color: "white", fontSize: "3.5em", cursor: "pointer" };
let projectIcon ={ marginRight: "0.7em", fontSize: "1.7em"}


const Landing = ({name}) => (
    <Layout>
        <Helmet>
            <title>{name}</title>
            <meta name="description" content={name} />
        </Helmet>

        <DisplayLanding name="Display"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>App Name</h2>
                    </header>
                    <p>App description: Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                    <div>
                    <div className='projectdetails'>
                        <div className='project'>
                            <FaClock style={projectIcon}/>
                            <div>
                            <h4>Project Duration</h4>
                            <div>10 weeks</div>
                            </div>
                        </div>
                        <div className='project'>
                            <FaSuitcase style={projectIcon}/>
                            <div>
                            <h4>My Role</h4>
                            <div>10 weeks</div>
                            </div>
                        </div>
                        <div className='project'>
                            <BiTask style={projectIcon}/>
                            <div>
                            <h4>Deliverables</h4>
                            <div>10 weeks</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className='inner'>
                        <header className="major">
                                <h3>The Process</h3>
                            </header>
            <div className='process'>
            <div className='eachprocess'>
            <div className='top'>
            <FaPeopleArrows style={iconStyles}/>
            <h4>Empathise</h4>
            </div>
            <ul className='processlist'>
                <li>User Research</li>
                <li>Interviews</li>
                <li>User Research</li>
                <li>User Research</li>
            </ul>
            </div>
            <div className='eachprocess'>
            <div className='top'>
            <RiFocus3Fill style={iconStyles}/>
            <h4>Define</h4>
            </div>
            <ul className='processlist'>
                <li>User Research</li>
                <li>Interviews</li>
                <li>User Research</li>
                <li>User Research</li>
            </ul>
            </div>
            <div className='eachprocess'>
            <div className='top'>
            <HiLightBulb style={iconStyles}/>
            <h4>Ideate</h4>
            </div>
            <ul className='processlist'>
                <li>User Research</li>
                <li>Interviews</li>
                <li>User Research</li>
                <li>User Research</li>
            </ul>
            </div>
            <div className='eachprocess'>
            <div className='top'>
            <MdImportantDevices style={iconStyles}/>
            <h4>Prototype</h4>
            </div>
            <ul className='processlist'>
                <li>User Research</li>
                <li>Interviews</li>
                <li>User Research</li>
                <li>User Research</li>
            </ul>
            </div>
            <div className='eachprocess'>
            <div className='top'>
            <BsClipboardData style={iconStyles}/>
            <h4>Test</h4>
            </div>
            <ul className='processlist'>
                <li>User Research</li>
                <li>Interviews</li>
                <li>User Research</li>
                <li>User Research</li>
            </ul>
            </div>

            </div>
            
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Orci maecenas</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section className='inner'>
            <div className='grid-wrapper'>
            <div className='image fit col-4'><img src={pic03} alt=""/></div>
            <div className='image fit col-4'><img src={pic03} alt=""/></div>
            <div className='image fit col-4'><img src={pic03} alt=""/></div>
            </div>
            </section>
        </div>

    </Layout>
)

export default Landing