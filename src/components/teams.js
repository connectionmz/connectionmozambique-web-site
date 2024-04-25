import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/Equipe6v2.jpeg') ,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Lasquinho Armando',
    designation: 'Diretor Executivo T.S',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'
  },
  {
    id: 2,
    image: require('../assets/images/Equipe5.jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Daudo Basilio',
    designation: 'Director do Departamento de Operação',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'
  },
  {
    id: 3,
    image: require('../assets/images/Equipe9.JPG'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ancha João',
    designation: 'Secretária',
    description: 'Formada em Designe pela Connection Mozambique.'
  },
  {
    id: 4,
    image: require('../assets/images/Equipe7.JPG'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ana Isabel Pililao',
    designation: 'Gestora dos recursos humanos',
    description: 'Licenciada em Gestão de recursos Humanos e relações Laborais pela Universidade Católica de Moçambique Faculdade de Educação. '
  },
  {
    id: 5,
    image: require('../assets/images/Equipe8.JPG'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Elias Raul',
    designation: 'Técnico informático',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'
  },
  {
    id: 6,
    image: require('../assets/images/Equipe2v2.jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Alberto Tembe',
    designation: 'Técnico informático',
    description: 'Licenciado em Engenharia Informática pela Universidade Lúrio, Faculdade de Engenharia.'
  },
  {
    id: 7,
    image: require('../assets/images/Equipe4.JPG'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Mario Supaer',
    designation: 'Técnico informático ',
    description: 'Licenciado em Engenharia Informática pela Universidade Lúrio, Faculdade de Engenharia.'
  },
  {
    id: 8,
    image: require('../assets/images/Equipe1v1.jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Nádia Saveca',
    designation: 'Técnica informática',
    description: 'Licenciado em Engenharia Informática pela Universidade Lúrio, Faculdade de Engenharia.'
  },
  {
    id: 9,
    image: require('../assets/images/Equipe3.jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Agostinho Henriques',
    designation: 'Técnico informático',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'

  },
  {
    id: 10,
    image: require('../assets/images/Braco-1.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Inoque Jose',
    designation: 'Chefia e Direção',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'

  },
  {
    id: 11,
    image: require('../assets/images/Braco-1.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Mohammad Vicente',
    designation: 'Diretor do Departamento de Software',
    description: 'Licenciado em Tecnologia de informação pela Universidade Católica de Moçambique, Faculdade de Turismo e Informática.'

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
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} class="img-thumbnail" />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <h3 className='teams-name'>{teams.name}</h3>
                  </div>
                  <div className='content'>
                    <span className='designation'>{teams.designation}</span>
                    <p className='description'>{teams.description}</p>
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