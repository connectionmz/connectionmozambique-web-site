import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contacte Nos</h2>
          <div className="subtitle">Fique connectado conosco</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Digite seu nome completo" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Digite seu Email" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Digite seu numero de contacto" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Digite a sua mensagem" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Enviar</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.117304993165!2d40.486068274228394!3d-12.964344859661715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18bfc900091d30b3%3A0x7c0cdaab06a93a45!2sCONNECTION%20MOZAMBIQUE!5e0!3m2!1spt-PT!2smz!4v1710379710029!5m2!1spt-PT!2smz"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              Connection Mozambique
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +258 868536500
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Pemba, Cabo Delgado
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;