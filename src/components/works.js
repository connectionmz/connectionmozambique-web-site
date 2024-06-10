import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://connectionmozambique-website.web.app/',
    image: require('../assets/images/1.jpg'),
    title: 'Formacao CFTV',
    subtitle: 'Trabalho de campo'
  },
  {
    id: 2,
    link: 'https://connectionmozambique-website.web.app/',
    image: require('../assets/images/17.jpg'),
    title: 'Formacao CFTV',
    subtitle: 'Instalacao de Sistema de Video vigilancia'
  },
  {
    id: 3,
    link: 'https://connectionmozambique-website.web.app/',
    image: require('../assets/images/19.jpg'),
    title: 'Formacao CFTV',
    subtitle: 'Trabalho de campo'
  },
  {
    id: 4,
    link: 'https://connectionmozambique-website.web.app/',
    image: require('../assets/images/22.jpg'),
    title: 'Instalacao de CFTV',
    subtitle: 'Instalacao de Sistema de Video vigilancia'
  },
  {
    id: 5,
    link: 'https://connectionmozambique-website.web.app/',
    image: require('../assets/images/24.jpg'),
    title: 'Instalacao de CFTV',
    subtitle: 'Trabalho de campo'
  }
]

function AppWorks() {
  const itemsPerPage = 9;
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderWorks = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const worksToShow = worksData.slice(startIndex, endIndex);

    return worksToShow.map((works) => (
      <Col sm={4} key={works.id}>
        <div className="portfolio-wrapper">
          <a href={works.link}>
            <Image
              src={works.image}
              alt={works.title}
              loading="lazy"
              className="img-fluid"
            />
            <div className="label text-center">
              <h3>{works.title}</h3>
              <p>{works.subtitle}</p>
            </div>
          </a>
        </div>
      </Col>
    ));
  };

  const totalPages = Math.ceil(worksData.length / itemsPerPage);
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Galeria</h2>
          <div className="subtitle">nosso trabalho</div>
        </div>
        <Row className="portfoliolist">{renderWorks()}</Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
}

export default AppWorks;