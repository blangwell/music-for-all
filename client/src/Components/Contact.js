import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return(
    <div id="contact">
      <h1 className="page-title">Contact</h1>
      <Form>
        <Form.Group controlId="email-address" className="w-25">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="email-message" className="w-50">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} onChange={(e) => setMessage(e.target.value)}/>
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  )
}

export default Contact;