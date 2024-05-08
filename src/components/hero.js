import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/sts3.jpg'),
    title: 'Serviço de Suporte Técnico Software',
    description: 'Oferecemos assistência especializada para resolver problemas relacionados ao funcionamento de programas de computador e aplicativos. Esse suporte inclui a identificação e solução de erros, configuração e atualização de software, instalação de patches de segurança, e suporte para uso e otimização de programas. Ajudamos os singulares/empresas a resolver problemas técnicos, fornecer orientações sobre como usar efetivamente o software e garantir que os sistemas estejam actualizados e funcionando corretamente. Também fornecemos treinamento e suporte técnico remoto para resolver problemas de software de forma rápida e eficiente!',
    link: 'https://www.facebook.com'
  },
  {
    id: 2,
    image: require('../assets/images/sts3.jpg'),
    title: 'Serviço de Administração de Redes de Computadores',
    description: 'Neste serviço oferecemos suporte especializado na gestão e manutenção de redes de computadores em empresas e organizações. Esse serviço inclui a configuração, monitoramento e manutenção dos dispositivos de rede, como roteadores, switches, firewalls e servidores, além da gestão de usuários, permissões e políticas de segurança. Garantimos que a rede esteja operando de forma eficiente, segura e confiável, minimizando o tempo de inatividade e garantindo a disponibilidade dos serviços de rede. Tambem identificamos e resolvemos problemas de rede, implementar atualizações de software e hardware, e garantir a conformidade com as políticas de segurança e as regulamentações governamentais!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/sts3.jpg'),
    title: 'Serviço de Suporte Tecnico de Hardware',
    description: 'Neste tipo de serviço oferecemos assistência especializada para resolver problemas relacionados ao hardware de dispositivos eletrônicos, como computadores, laptops, impressoras, servidores, entre outros. Esse suporte visa garantir o bom funcionamento dos equipamentos, minimizar o tempo de inatividade e manter a produtividade dos usuários. Esse serviço é essencial para empresas e usuários individuais que dependem de seus dispositivos para realizar suas atividades diárias. Com um suporte técnico de hardware eficiente, é possível garantir a disponibilidade e a confiabilidade dos equipamentos, além de prolongar sua vida útil dos mesmos!',
    link: 'https://www.twitter.com'
  },
  {
    id: 4,
    image: require('../assets/images/sts3.jpg'),
    title: 'Serviço de Sistemas de Vigilância e Monitoramento',
    description: '0',
    link: 'https://www.twitter.com'
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
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Ler Mais <i className="fas fa-chevron-right"></i></a>
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