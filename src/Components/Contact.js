import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return(
    <div id="contact">
      <h1 className="page-title">Contact</h1>
      {/* <Form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="email-address" className="w-25">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="email-message" className="w-50">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} onChange={(e) => setMessage(e.target.value)} required/>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </form>
      {/* </Form> */}
    </div>
  )
}

export default Contact;