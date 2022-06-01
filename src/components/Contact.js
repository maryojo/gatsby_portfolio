import React from 'react'
import Form from './Form';
import Thanks from './Thanks';



export default function Contact (){
    // const [show, setShow] = React.useState(true);

    // let content;
    // if (show) {
    //   content = <Form/>;
    // } else {
    //     content = <Thanks/>;
    // }

    return(
    <section id="contact">
        <div className="inner">
            
            <section>
            <Form/>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">maryojo3@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Lagos<br />
                        Nigeria</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)
}
// export default Contact
