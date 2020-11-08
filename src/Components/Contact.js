import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
const SERVER_URL = process.env.SERVER_URL

const Contact = (props) => {
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  let [redirect, setRedirect] = useState(false);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {email, message}

    axios.post(`http://localhost:8080/sendemail`, {email, message})
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
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </div>
  )
  }
}

export default Contact;


{/* <form onSubmit={handleSubmit}>
  <div className="column">
      <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" required />
      </div>
      <div className="form-group">
          <label htmlFor="message">message</label>
          <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="input" required >

          </textarea>
          <input type="textarea" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="input" required />
      </div>
      <button type="submit" className="button">Submit</button>
  </div>
</form> */}