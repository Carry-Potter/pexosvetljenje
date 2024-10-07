import React,{ useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Row, Col, Card, Form, Button, Carousel } from 'react-bootstrap';
import { Sun, Moon, Zap, Palette, Tool, ThumbsUp, Phone , Calendar, Car,Shield,Lightbulb,Award,User,Star} from 'lucide-react';

import slika2 from './pex.jpg';
import slika3 from './audi.png';
import slika4 from './1.webp';
import slika5 from './2.jpg';
import slika6 from './3.jpg';
import slika7 from './4.jpg';



import './LandingPage.css';

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: 'Exo 2', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Exo 2', sans-serif;
    font-weight: 600;
  }

  p, a, span, div {
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
  }

  .navbar-brand {
    font-family: 'Exo 2', sans-serif;
    font-weight: 700;
  }
`;

export default function LandingPage() {

    const [activeSection, setActiveSection] = useState('home');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    const testimonials = [
        {
          name: "Marko Marković",
          comment: "Fantastično ambijentalno osvetljenje! Potpuno je transformisalo unutrašnjost mog automobila.",
          rating: 5
        },
        {
          name: "Ana Anić",
          comment: "Profesionalna usluga i vrhunski kvalitet. Preporučujem svima!",
          rating: 5
        },
        {
          name: "Petar Petrović",
          comment: "Odlična atmosfera u autu, posebno tokom noćnih vožnji. Vredi svaki dinar.",
          rating: 4
        }
      ];



    const inputStyle = {
        backgroundColor: '#333',
        color: 'white',
        border: '1px solid #444',
        '::placeholder': {
          color: 'white'
        }
      };

    const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [ slika2, slika3,slika5,slika6,slika7,];
  const backgrounds1 = [ slika6, slika7];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length);
    }, 5000); // Menja sliku svakih 5 sekundi

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        }
      }
    ]
  };

  return (
    <>
      <GlobalStyle />
      <div style={{ background: 'linear-gradient(rgb(0 7 10), rgb(1 2 12))', color: '#ffffff' }}>
        <Navbar   expand="lg" fixed="top" className='navbar-custom'>
          <Container>
            <Navbar.Brand href="#home" className="text-primary rubik-mono-one-regular" style={{ fontFamily: '"Rubik Mono One", monospace', fontStyle: 'normal', fontSize: '2.2rem', transform: 'scale(1, 0.75)', lineHeight: '1' }}> Pex</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                  <Nav.Link 
                    key={section}
                    href={`#${section}`}
                    className={`${activeSection === section ? 'text-primary' : 'text-light'}`}
                    style={{ fontSize: '1.2rem' }}
                  >
                    {section === 'home' ? 'Početna' : 
                     section === 'about' ? 'O nama' : 
                     section === 'services' ? 'Usluge' : 
                     section === 'gallery' ? 'Galerija' : 'Kontakt'}
                  </Nav.Link>
                ))}
              </Nav>
              <div className="ms-3 text-light">
                <Phone size={16} className="me-1" />
                <span>062 850 1513</span>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section
          id="home"
          className="section-full-height"
          style={{
            backgroundImage: `url(${backgrounds1[currentBg % backgrounds1.length] || 'undefined'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            }}
          />
          <Container style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="display-4 text-white">UNAPREDITE VAŠ AUTOMOBIL SA AMBIJENTALNIM OSVETLJENJEM</h1>
            <p className="lead text-white">Stvorite jedinstvenu atmosferu u vašem vozilu sa našim profesionalnim uslugama ugradnje.</p>
            <Button variant="primary" size="lg" href="#contact">Kontaktirajte Nas</Button>
          </Container>
        </section>
        <section id="kako-radi" className="section-full-height">
          <Container>
            <h2 className="section-title">KAKO RADI?</h2>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <img
                  src={slika4}
                  alt="Dijagram instalacije ambijentalnog osvetljenja"
                  className="img-fluid rounded shadow-lg"
                />
              </Col>
              <Col lg={6}>
                <h3 className="mb-4 text-light">Jednostavan Proces u 3 Koraka</h3>
                <Row>
                  {[
                    { icon: Phone,naslov:"KONTAKT", text: "Pozovete nas i odaberete ambijentalno osvetljenje" },
                    { icon: Calendar,naslov:"TERMIN", text: "Dogovorimo se oko termina" },
                    { icon: Car,naslov:"UGRADNJA", text: "Dođete i mi vam ugradimo ambijentalno osvetljenje" }
                  ].map((step, index) => (
                    <Col md={4} key={index} className="mb-3">
                      <Card className="h-100 text-light border-0 shadow" style={{ backgroundColor: 'rgb(7 57 94 / 22%)' }}>
                        <Card.Body className="d-flex flex-column align-items-center text-center">
                          <div className="rounded-circle bg-primary p-3 mb-3">
                            <step.icon size={24} />
                          </div>
                          <h5>{step.naslov}</h5>
                          <p className="mb-0">{step.text}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <p className="text-light mt-4">
                  Nakon ugradnje, imate potpunu kontrolu nad osvetljenjem vašeg automobila. 
                  Izaberite boje, podesite intenzitet i uživajte u potpuno novom doživljaju vožnje.
                </p>
              </Col>
            </Row>
          </Container>
        </section>


        <section id="about" className="section-full-height">
          <Container>
            <h2 className="section-title">O NAMA</h2>
            <Row className="justify-content-center">
              <Col md={8} className="text-center">
                <div className="mb-5">
                  <h3 className="text-light mb-4">Naša Priča</h3>
                  <p className="lead text-light">Sa preko decenije iskustva, postali smo lideri u kreiranju jedinstvenih ambijentalnih osvetljenja za automobile. Naša strast prema bojama i svetlu vodi nas ka inovacijama koje transformišu svako vozilo u personalizovano remek-delo.</p>
                </div>
                <div>
                  <h3 className="text-light mb-4">Naša Misija</h3>
                  <p className="lead text-light">Posvećeni smo stvaranju savršenog balansa između estetike i funkcionalnosti. Naš cilj je da vam pružimo osvetljenje koje ne samo da izgleda impresivno, već i poboljšava vaše celokupno iskustvo vožnje.</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={4} className="text-center mb-4">
                <div className="rounded-circle bg-primary p-3 d-inline-block mb-3">
                  <Star size={32} color="white" />
                </div>
                <h4 className="text-light">Kvalitet</h4>
                <p className="text-light">Koristimo samo najkvalitetnije materijale i najnovije tehnologije.</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <div className="rounded-circle bg-primary p-3 d-inline-block mb-3">
                  <User size={32} color="white" />
                </div>
                <h4 className="text-light">Personalizacija</h4>
                <p className="text-light">Svaki projekat prilagođavamo individualnim željama i potrebama klijenta.</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <div className="rounded-circle bg-primary p-3 d-inline-block mb-3">
                  <ThumbsUp size={32} color="white" />
                </div>
                <h4 className="text-light">Zadovoljstvo</h4>
                <p className="text-light">Naš uspeh merimo zadovoljstvom naših klijenata i njihovim osmesima.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="services" >
          <Container>
            <h2 className="section-title">NAŠE USLUGE</h2>
            <Row>
              <Col md={4}>
                <Card className="mb-4 text-light h-100" style={{ backgroundColor: 'rgb(7 57 94 / 22%)', border: '1px solid #007bff' }}>
                  <Card.Body className="text-center d-flex flex-column justify-content-between">
                    <div>
                      <Sun size={48} className="text-primary mb-3" />
                      <Card.Title>LED Osvetljenje</Card.Title>
                    </div>
                    <Card.Text>Vrhunsko LED osvetljenje sa širokim spektrom boja i efekata.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4 text-light h-100" style={{ backgroundColor: 'rgb(7 57 94 / 22%)', border: '1px solid #007bff' }}>
                  <Card.Body className="text-center d-flex flex-column justify-content-between">
                    <div>
                      <Moon size={48} className="text-primary mb-3" />
                      <Card.Title>Ambijentalno Osvetljenje</Card.Title>
                    </div>
                    <Card.Text>Kreiranje savršene atmosfere za svako raspoloženje i priliku.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4 text-light h-100" style={{ backgroundColor: 'rgb(7 57 94 / 22%)', border: '1px solid #007bff' }}>
                  <Card.Body className="text-center d-flex flex-column justify-content-between">
                    <div>
                      <Zap size={48} className="text-primary mb-3" />
                      <Card.Title>Dinamički Efekti</Card.Title>
                    </div>
                    <Card.Text>Napredni sistemi sa dinamičkim svetlosnim efektima.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        

        <section id="gallery" className="section-full-height">
          <Container>
            <h2 className="section-title">GALERIJA</h2>
            <Slider {...sliderSettings}>
              {backgrounds.map((slika, index) => (
                <div key={index} className="px-2">
                  <img
                    src={slika}
                    alt={`Ambijentalno osvetljenje ${index + 1}`}
                    className="img-fluid rounded"
                    style={{
                      height: '500px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Container>
        </section>

        <section id="testimonials" >
          <Container>
            <h2 className="section-title">ZADOVOLJNI KORISNICI</h2>
            <Slider {...sliderSettings}>
              {[
                {
                  name: "Marko Marković",
                  comment: "Fantastično ambijentalno osvetljenje! Potpuno je transformisalo unutrašnjost mog automobila.",
                  rating: 5
                },
                {
                  name: "Ana Anić",
                  comment: "Profesionalna usluga i vrhunski kvalitet. Preporučujem svima!",
                  rating: 5
                },
                {
                  name: "Petar Petrović",
                  comment: "Odlična atmosfera u autu, posebno tokom noćnih vožnji. Vredi svaki dinar.",
                  rating: 4
                },
                {
                  name: "Jovana Jovanović",
                  comment: "Izuzetno sam zadovoljna rezultatom. Moj auto sada izgleda kao iz budućnosti!",
                  rating: 5
                },
                {
                  name: "Nikola Nikolić",
                  comment: "Brza i efikasna ugradnja. Osvetljenje radi besprekorno već mesecima.",
                  rating: 5
                },
                {
                  name: "Milica Milić",
                  comment: "Odlična opcija za personalizaciju vozila. Kvalitet osvetljenja je izvanredan.",
                  rating: 4
                },
                {
                  name: "Stefan Stefanović",
                  comment: "Impresioniran sam pažnjom za detalje. Svaka preporuka za Pex tim!",
                  rating: 5
                },
                {
                  name: "Jelena Jelenić",
                  comment: "Ugradnja je bila brza, a rezultat je fantastičan. Moj auto je sada prava atrakcija!",
                  rating: 5
                },
                {
                  name: "Dušan Dušanović",
                  comment: "Odlična usluga, profesionalan pristup. Definitivno ću ih preporučiti prijateljima.",
                  rating: 4
                },
                {
                  name: "Ivana Ivanović",
                  comment: "Nisam mogla da zamislim koliko će ambijentalno osvetljenje unaprediti izgled mog auta. Oduševljena sam!",
                  rating: 5
                },
                {
                  name: "Goran Goranović",
                  comment: "Vrhunski kvalitet proizvoda i stručnost pri ugradnji. Zaista sam zadovoljan.",
                  rating: 5
                },
                {
                  name: "Tamara Tamarić",
                  comment: "Pex tim je ispunio sva moja očekivanja. Osvetljenje je prelepo i funkcionalno.",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <div key={index} className="px-2">
                  <Card className="h-100 bg-dark text-light border-0 shadow">
                    <Card.Body style={{ backgroundColor: 'rgb(7 57 94 / 22%)', border: '2px solid #007bff', borderRadius: '8px' }}>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary rounded-circle p-2 me-3">
                            <User size={24} />
                          </div>
                          <h5 className="mb-0">{testimonial.name}</h5>
                        </div>
                        <div>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                          ))}
                        </div>
                      </div>
                      <Card.Text>"{testimonial.comment}"</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Container>
        </section>



        <section id="contact" className="section-full-height">
          <Container>
            <h2 className="section-title">KONTAKTIRAJTE NAS</h2>
            <Row>
              <Col md={6} className="mx-auto">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex">Ime</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Unesite vaše ime" 
                      style={{...inputStyle, backgroundColor: 'rgb(9 70 132 / 29%)', color: '#fff', border: '1px solid rgb(0, 20, 134)'}}
                      className="custom-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex">Email adresa</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Unesite vašu email adresu" 
                      style={{...inputStyle, backgroundColor: 'rgb(9 70 132 / 29%)', color: '#fff', border: '1px solid rgb(0, 20, 134)'}}
                      className="custom-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex">Poruka</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      placeholder="Unesite vašu poruku" 
                      style={{...inputStyle, backgroundColor: 'rgb(9 70 132 / 29%)', color: '#fff', border: '1px solid rgb(0, 20, 134)'}}
                      className="custom-input"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">Pošalji</Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>

        <footer className="text-secondary text-center py-4">
          <Container>
            
            <hr className="my-4" />
           <Row>
              <Col md={4}>
                <h5 className="text-secondary">Kontakt</h5>
                <p className="text-secondary">Email: info@pexosvetljenje.com</p>
                <p className="text-secondary">Telefon: +381 11 123 4567</p>
              </Col>
              <Col md={4}>
                <h5 className="text-secondary">Pratite nas</h5>
                <p>
                  <a href="#" className="text-secondary me-3">Facebook</a>
                  <a href="#" className="text-secondary me-3">Instagram</a>
                  <a href="#" className="text-secondary">YouTube</a>
                </p>
              </Col>
              <Col md={4}>
                <h5 className="text-secondary">Radno vreme</h5>
                <p className="text-secondary">Pon - Pet: 9:00 - 17:00</p>
                <p className="text-secondary">Sub: 10:00 - 14:00</p>
              </Col>
            </Row> <p className="text-secondary">&copy; 2024 Ambijentalno Osvetljenje Pex. Sva prava zadržana.</p>
          </Container>
        </footer>
      </div>
    </>
  );
}