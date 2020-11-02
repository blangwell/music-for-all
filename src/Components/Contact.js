import { Form, Button } from 'react-bootstrap'

function Contact() {

  return(
    // <div>
    //   <h1 className="page-title">Contact</h1>
    //   <form>
    //     <label htmlFor="email">Email Address</label>
    //     <input id="email" type="email" name="email" />
    //     <label htmlFor="message">Message</label>
    //     <textarea id="message" type="text" name="message" />

    //   </form>
    // </div>
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