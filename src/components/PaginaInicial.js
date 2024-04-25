import React, { Component } from 'react'
import AppHero from './hero'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppWorks from './works';


const servicesData = [
  {
    id: 1,
    icon: 'fas fa-screwdriver-wrench',
    title: 'Suporte Técnico de Hardware',
    description:
      <ul class="list-unstyled">
        <li><i class="fas fa-arrow-right-long"></i> Montagem de computadores</li>
        <li><i class="fas fa-arrow-right-long"></i> Instalação  de Componentes</li>
        <li><i class="fas fa-arrow-right-long"></i> Reparo e manutenção de hardware</li>
        <li><i class="fas fa-arrow-right-long"></i> Diagnóstico de problemas de hardware</li>
        <li><i class="fas fa-arrow-right-long"></i> Backup e recuperação de dados</li>
        <li><i class="fas fa-arrow-right-long"></i> Configuração de dispositivos periféricos</li>
        <li><i class="fas fa-arrow-right-long"></i> Atualização de firmware e drivers</li>
      </ul>
  },
  {
    id: 2,
    icon: 'fas fa-laptop-code',
    title: 'Suporte Técnico Software',
    description: <ul class="list-unstyled">
      <li><i class="fas fa-arrow-right-long"></i> Instalação de Software</li>
      <li><i class="fas fa-arrow-right-long"></i> Configuração e Personalização</li>
      <li><i class="fas fa-arrow-right-long"></i> Suporte Técnico</li>
      <li><i class="fas fa-arrow-right-long"></i> Backup e Recuperação de Dados</li>
      <li><i class="fas fa-arrow-right-long"></i> Treinamento e Capacitação</li>
      <li><i class="fas fa-arrow-right-long"></i> Gerenciamento de Licenças e Ativos</li>
    </ul>
  },
  {
    id: 3,
    icon: 'fas fa-network-wired',
    title: 'Administração de Rede',
    description: <ul class="list-unstyled">
      <li><i class="fas fa-arrow-right-long"></i> Instalação e configuração de rede</li>
      <li><i class="fas fa-arrow-right-long"></i> Gestão de endereços IPli</li>
      <li><i class="fas fa-arrow-right-long"></i> Segurança de rede</li>
      <li><i class="fas fa-arrow-right-long"></i> Monitoramento de rede</li>
      <li><i class="fas fa-arrow-right-long"></i> Gerenciamento de usuários e acesso</li>
      <li><i class="fas fa-arrow-right-long"></i> Backup e recuperação de dados</li>
      <li><i class="fas fa-arrow-right-long"></i> Resolução de Problemas de Rede</li>
      <li><i class="fas fa-arrow-right-long"></i> Atualização e manutenção de software de rede</li>
    </ul>
  },
  {
    id: 4,
    icon: 'fas fa-eye',
    title: 'Sistemas de Vigilância e Monitoramento',
    description: <ul class="list-unstyled">
      <li><i class="fas fa-arrow-right-long"></i> Instalação de Câmeras de Segurança</li>
      <li><i class="fas fa-arrow-right-long"></i> Configuração de Sistemas de Gravação</li>
      <li><i class="fas fa-arrow-right-long"></i> Integração com Alarmes e Sensores</li>
      <li><i class="fas fa-arrow-right-long"></i> Monitoramento Remoto</li>
      <li><i class="fas fa-arrow-right-long"></i> Manutenção Preventiva</li>
      <li><i class="fas fa-arrow-right-long"></i> Atualização de Software e Firmware</li>
      <li><i class="fas fa-arrow-right-long"></i> Análise de Dados e Inteligência de Segurança</li>
      <li><i class="fas fa-arrow-right-long"></i> Treinamento de Operadores</li>
    </ul>
  }
]
export default class PaginaInicial extends Component {

  render() {
    return (
      <Container fluid>
        <AppHero />
        <div>
          <Row>
            <Col sm={4}>
              <div className="temp" >

                <h1 className='titulo'>Missão</h1>
                <p >Ser a referência em assistência técnica de TI, proporcionando serviços ágeis, especializados e 
                  de qualidade. Resolver desafios com competência e inovação, garantindo a continuidade das operações 
                  dos clientes. Ser um parceiro confiável, permitindo que alcancem o sucesso sem preocupações tecnológicas.</p>

              </div>
            </Col>

            <Col sm={4}>
              <div className="temp" >
                <h1 className='titulo'>Visão</h1>
                <p >Ser líderes reconhecidos e inovadores em assistência técnica de TI, buscando constantemente 
                  elevar os padrões do setor e oferecer soluções que se destacam em eficiência, confiabilidade e
                   inovação.</p>
              </div>
            </Col>
            <Col sm={4}>
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
          <Row className='servicos-content'>
            <Row>
              <Col sm={12}>
                <div className="title-holder">
                  <h2 className='label-nossos-servicos'>Nossos Servicos</h2>
                  <div className="subtitle">Nossos servicos espacular</div>
                </div>
              </Col>
            </Row>
            <Row>
              {
                servicesData.map(services => {
                  return (

                    <Col sm={6} className='cartao' key={services.id}>
                      <Link to="/servicos" className='link'>
                        <div className="icon">
                          <i className={services.icon}></i>
                        </div>
                        <h3>{services.title}</h3>
                      </Link>
                    </Col>


                  );
                })
              }
            </Row>
          </Row>
        </div>
        <AppWorks />
      </Container >

    )
  }
}
