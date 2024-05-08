import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    description:  <ul class="list-unstyled">
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
<li><i class="fas fa-arrow-right-long"></i> Gestão de endereços IP</li>
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

function AppServices() {
//const descricao = this.services.description.map((description) => <li>{description}</li>);

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nossos serviços</h2>
          <div className="subtitle">serviços que fornecemos</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={6} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                 
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;