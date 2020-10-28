import React from 'react'

function FormField() {
    return (
        <div>
            <form name="contact" action="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" id="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" id="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message" id="message"></textarea></label>
                </p>
                <div className="field">
                    <div data-netlify-recaptcha="true"></div>
                </div>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default FormField
