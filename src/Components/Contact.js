import { useState, useRef } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
const {REACT_APP_PUBLIC_RECAPTCHA_KEY, REACT_APP_SERVER_URL} = process.env;

const Contact = () => {
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  let [redirect, setRedirect] = useState(false);

  const recaptchaRef = useRef();
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();

      axios.post(`${REACT_APP_SERVER_URL}/sendemail`, {email, message, token})
      .then(response => {
        console.log(response.data, 'REPONSE DATA CLIENT SIDE')
          alert('message sent');
          setRedirect(true)
          history.push('/')
      })
      .catch(err => {
        console.log('post error', err)
      })
  }

  if (redirect) {
    return <Redirect to="/" />
  } else {

  return(
    <div id="contact">
      <h1 className="page-title">Contact</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="w-25">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </Form.Group>
        <Form.Group controlId="message" className="w-50">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={5} onChange={(e) => setMessage(e.target.value)} value={message} required/>
        </Form.Group>
        <ReCAPTCHA 
        ref={recaptchaRef}
        size="invisible" 
        sitekey={REACT_APP_PUBLIC_RECAPTCHA_KEY}
        className="g-recaptcha"
        />
        <Button type="submit" variant="primary">Submit</Button>
      </Form>


    </div>
  )
  }
}

export default Contact;