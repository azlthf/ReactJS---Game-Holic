import {useState} from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


const Contact = () => {

  const [judul, setJudul ] = useState('Welcome');

  function handleName(e) {
    setJudul(e.target.value);
  }

  return (
     <Container id="contact"> 
    <Form className="p-4">
      <h1 className="text-center text-white">{judul}</h1>
      <Row className="justify-content-md-center">
        <Col className="col-6">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-white">Nama :</Form.Label>
        <Form.Control type="text" placeholder="Nama" onChange={handleName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-white">Comment : </Form.Label>
        <Form.Control as="textarea" placeholder="Comment" rows={3} />
      </Form.Group>
      <Button variant="primary" href="#best">Submit</Button>
      </Col>
      </Row>
    </Form>
    </Container>

  );
}

export default Contact