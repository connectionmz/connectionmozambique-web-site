import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
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
    <Container fluid>
      <div className="secondary-logo">
        <Link to="/" className='link'>
          <img src='/images/Frente 2-1.png' width="180" height="120" alt="LOGO" />
        </Link>
      </div>
      <div className="copyright"> &copy; 2024 Corporate. All Right Reserved. </div>
      <div className="socials">
      <ul>
          <li><a href="https://mobile.facebook.com/profile.php?id=61557475474340&_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://twitter.com/Connection0201"><i className="fab fa-x-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/connection-mozambique-a4b1b8296/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/connectionmozambique"><i className="fa-brands fa-square-instagram"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;