import React from 'react'
import { navigate } from 'gatsby';



function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

export default function Form (){
    const [state, setState] = React.useState({});

    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }

    return(
      <section>
            <header className="major">
                <h2>Contact me</h2>
            </header>
            <form name="contact-form-portfolio" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks">
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact-form-portfolio" />
                    <p hidden>
                    <label>
                      Do not fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                    </p>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" onChange={handleChange}></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
      </section>

);
}
