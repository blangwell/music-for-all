import { Form, Button } from 'react-bootstrap'

function Contact() {

  return(
    <Form>
      <Form.Group controlId="email-address" className="w-25">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Your email" />
      </Form.Group>
      <Form.Group controlId="email-message" className="w-50">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button variant="primary">Submit</Button>
    </Form>
  )
}

export default Contact;