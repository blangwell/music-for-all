import { useState, createRef, useRef } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

// const SERVER_URL = process.env.SERVER_URL

const Contact = (props) => {
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  let [redirect, setRedirect] = useState(false);
  let [captchaVal, setCaptchaVal] = useState(null);

  // const recaptchaRef = createRef();
  const recaptchaRef = useRef();

  // const onSubmitWithReCAPTCHA = async () => {
  // }
  
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    console.log(token)
      axios.post('http://localhost:8080/sendemail', {email, message})
      .then(response => {
        if (response.data.status === 'success') {
          alert('message sent');
          history.push('/')
        } else if (response.data.status === 'fail') {
          alert('message failed')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  function onChange(val) {
    console.log('captcha value : ', val)
    setCaptchaVal(val)
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
        sitekey='6LcWA-EZAAAAAJzTcReB1-J4hkb9kxCGrVhBhzjw ' 
        // sitekey={process.env.REACT_APP_RECAPTCHA_KEY} 
        onChange={onChange} 
        />
        <Button type="submit" variant="primary">Submit</Button>
      </Form>


    </div>
  )
  }
}

export default Contact;