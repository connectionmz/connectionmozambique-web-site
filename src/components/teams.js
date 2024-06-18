import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsHead = [
  {
    id: 1,
    image: require('../assets/images/Lasquinho.jpg') ,
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Lasquinho Armando',
    designation: 'Diretor Executivo T.S',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'
  },
  {
    id: 2,
    image: require('../assets/images/Daudo.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Daudo Basilio',
    designation: 'Director do Departamento de Operação',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'
  }
]

const teamsStaff = [
  {
    id: 1,
    image: require('../assets/images/Ancha.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Ancha João',
    designation: 'Secretária',
    description: 'Formada em Designe pela Connection Mozambique.'
  },
  {
    id: 2,
    image: require('../assets/images/Kizito.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Kizito Joanes',
    designation: 'Estagiario em Tecnologias de Informacao',
    description: 'Licenciada em Gestão de recursos Humanos e relações Laborais pela Universidade Católica de Moçambique Faculdade de Educação. '
  },
  {
    id: 3,
    image: require('../assets/images/Elias.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Elias Raul',
    designation: 'Técnico informático',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'
  },
  {
    id: 4,
    image: require('../assets/images/Tembe.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Alberto Tembe',
    designation: 'Técnico informático',
    description: 'Licenciado em Engenharia Informática pela Universidade Lúrio, Faculdade de Engenharia.'
  },
  {
    id: 5,
    image: require('../assets/images/Supaer.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Mario Supaer',
    designation: 'Técnico informático ',
    description: 'Licenciado em Engenharia Informática pela Universidade Lúrio, Faculdade de Engenharia.'
  },
  {
    id: 6,
    image: require('../assets/images/Nadia.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Nádia Saveca',
    designation: 'Técnica informática',
    description: 'Licenciado em Engenharia Informática pela Universidade Lúrio, Faculdade de Engenharia.'
  },
  {
    id: 7,
    image: require('../assets/images/Agostinho.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Agostinho Henriques',
    designation: 'Técnico informático',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'

  },
  {
    id: 8,
    image: require('../assets/images/Inok.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Inoque Jose',
    designation: 'Chefia e Direção',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'

  },
  {
    id: 9,
    image: require('../assets/images/Mohammad.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Mohammad Vicente',
    designation: 'Diretor do Departamento de Software',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'

  },
  {
    id: 10,
    image: require('../assets/images/Braco-1.png'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Magrete Joao Mario',
    designation: 'Assistente Administrativa',
    description: ''

  },
  {
    id: 11,
    image: require('../assets/images/Alex.jpg'),
    fbLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    name: 'Alex Abreu Joao',
    designation: 'Responsavel da Logistica',
    description: ''

  }
]



function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nossos Colaboradores</h2>
          <div className="subtitle">Alguns dos nossos especialistas</div>
        </div>
        <Row className='justify-content-center'>
          {
            teamsHead.map(teams => {
              return (
                <Col sm={3} key={teams.id} >
                  <div className='image'>
                    <Image src={teams.image} className="rounded-circle shadow-4-strong" />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <h5 className='teams-name'>{teams.name}</h5>
                    <h5 className='designation'>{teams.designation}</h5>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Row className='justify-content-center'>
        {
            teamsStaff.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} className="rounded-circle shadow-4-strong" />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <h5 className='teams-name'>{teams.name}</h5>
                    <h5 className='designation'>{teams.designation}</h5>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}


export default AppTeams;