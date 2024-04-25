import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/1.jpg'),
    title: 'Lonely Path',
    subtitle: 'Web Design'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/2.jpg'),
    title: 'Photographer Girl',
    subtitle: 'Branding'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/3.jpg'),
    title: 'The Difference',
    subtitle: 'Web Design'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/20.jpg'),
    title: 'Nature Patterns',
    subtitle: 'Branding'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/images/21.jpg'),
    title: 'The Difference',
    subtitle: 'Photography'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/images/22.jpg'),
    title: 'Winter Sonata',
    subtitle: 'Web Design'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require('../assets/images/23.jpg'),
    title: 'Lonely Path',
    subtitle: 'Branding'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../assets/images/24.jpg'),
    title: 'Appreciation',
    subtitle: 'Photography'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../assets/images/25.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  },
  {
    id: 10,
    link: 'https://www.google.com',
    image: require('../assets/images/26.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  },
  {
    id: 11,
    link: 'https://www.google.com',
    image: require('../assets/images/8.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  },
  {
    id: 12,
    link: 'https://www.google.com',
    image: require('../assets/images/9.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  },
  {
    id: 13,
    link: 'https://www.google.com',
    image: require('../assets/images/7.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  },
  {
    id: 14,
    link: 'https://www.google.com',
    image: require('../assets/images/6.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  },
  {
    id: 15,
    link: 'https://www.google.com',
    image: require('../assets/images/5.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  },
  {
    id: 16,
    link: 'https://www.google.com',
    image: require('../assets/images/4.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  }
]

function AppWorks() {
  const itemsPerPage = 6;
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
            <Image src={works.image} />
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