import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid className='valores'>
      <Row>
        <Col sm={3}>
          <div className="temp" >
            <div className="secondary-logo">
              <Link to="/" className='link'>
                <img src='/images/Frente 2-1.png' width="180" height="120" alt="LOGO" />
              </Link>
              <Link to="/" className='link'>Pagina Inicial </Link>
              <Link to="/servicos" className='link'> Serviços </Link>
              <Link to="/contacte_nos" className='link'>Contacte-nos </Link>
              <Link to="/sobre_nos" className='link'> Sobre Nós</Link>
            </div>
            <div className="socials">
        <ul>
          <li className="footer-socials"><a href="https://mobile.facebook.com/profile.php?id=61557475474340&_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></a></li>
          <li className="footer-socials"><a href="https://twitter.com/Connection0201"><i className="fab fa-x-twitter"></i></a></li>
          <li className="footer-socials"><a href="https://www.linkedin.com/in/connection-mozambique-a4b1b8296/"><i className="fab fa-linkedin-in"></i></a></li>
          <li className="footer-socials"><a href="https://www.instagram.com/connectionmozambique"><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="temp" >

            <h1 className='titulo'>Missão</h1>
            <p >Ser a referência em assistência técnica de TI, proporcionando serviços ágeis, especializados e
              de qualidade. Resolver desafios com competência e inovação, garantindo a continuidade das operações
              dos clientes. Ser um parceiro confiável, permitindo que alcancem o sucesso sem preocupações tecnológicas.</p>

          </div>
        </Col>

        <Col sm={3}>
          <div className="temp" >
            <h1 className='titulo'>Visão</h1>
            <p >Ser líderes reconhecidos e inovadores em assistência técnica de TI, buscando constantemente
              elevar os padrões do setor e oferecer soluções que se destacam em eficiência, confiabilidade e
              inovação.</p>
          </div>
        </Col>
        <Col sm={3}>
          <div className="temp" >
            <h1 className='titulo'>Valores</h1>
            <ul className='list-valores'>
              <li>Confiança e Integridade</li>
              <li>Aprendizado Contínuo</li>
              <li> Inovação</li>
              <li>Compromisso com o Cliente</li>
              <li>Trabalho em Equipa</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className="copyright"> &copy; 2024 Corporate. All Right Reserved.</div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;