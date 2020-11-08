import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
const SERVER_URL = process.env.SERVER_URL

const Contact = () => {
  let [email, setEmail] = useState('')
  let [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const sentMessage = { email, message }
    axios.post(`http://localhost:8080/sendemail`, sentMessage)
    .then(response => {
      console.log(response);
      setEmail('');
      setMessage('');
    })
    .catch(err => console.log(err))
    // console.log(e);
  }

  return(
    <div id="contact">
      <h1 className="page-title">Contact</h1>
      {/* <Form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="w-25">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="message" className="w-50">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" name="message" value={message} rows={5} onChange={(e) => setMessage(e.target.value)} required/>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </form>
      {/* </Form> */}
    </div>
  )
}

export default Contact;