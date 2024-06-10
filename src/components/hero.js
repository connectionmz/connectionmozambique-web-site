import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/37.jpg'),
    title: 'Serviço de Suporte Técnico Software',
    description: 'Oferecemos suporte técnico completo para software, incluindo correção de erros, atualizações, instalação de patches de segurança e otimização de programas. Nosso treinamento remoto garante a eficiência e segurança dos sistemas de nossos clientes!',
    link: '#'
  },
  {
    id: 2,
    image: require('../assets/images/35.jpg'),
    title: 'Serviço de Administração de Redes de Computadores',
    description: 'Oferecemos suporte técnico para hardware, garantindo bom funcionamento, minimizando tempo de inatividade e mantendo a produtividade. Essencial para empresas e usuários individuais, nosso serviço assegura a disponibilidade, confiabilidade e prolongamento da vida útil dos dispositivos!',
    link: '#'
  },
  {
    id: 3,
    image: require('../assets/images/30.jpg'),
    title: 'Serviço de Suporte Tecnico de Hardware',
    description: 'Oferecemos suporte técnico para hardware, garantindo funcionamento contínuo e produtividade, tanto para empresas quanto para usuários individuais!',
    link: '#'
  },
  {
    id: 4,
    image: require('../assets/images/29.jpg'),
    title: 'Serviço de Sistemas de Vigilância e Monitoramento',
    description: 'Oferecemos soluções de vigilância usando câmeras, sensores e alarmes para detectar atividades suspeitas, garantindo segurança com prevenção de crimes, monitoramento em tempo real e análise de gravações. Essenciais para proteger pessoas, bens e informações!',
    link: '#'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide" + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;