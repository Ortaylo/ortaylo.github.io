import React, {useState} from "react";

const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    const {name,email,message} = formState;

    const handleChange = (event) => {
        console.log(event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
    }
    return(
        <section>
    <h1 data-testid = "h1tag">Contact me</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label >Name:</label>
        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
      </div>
      <div>
        <label >Email address:</label>
        <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
      </div>
      {errorMessage && (
         <div>
         <p className="error-text">{errorMessage}</p>
       </div>
      )}
      <button type="submit">Submit</button>
      </form>
    </section>
    )
}
export default ContactForm;