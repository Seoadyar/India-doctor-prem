import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../css/Navibar.css'
function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Apollo Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="#deets">HOME</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <NavDropdown title="ADVANTAGE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Solution</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Meet Dr Prem
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">The Team</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

        
            <Nav.Link href="#deets">ALL-ON-4</Nav.Link>

            <NavDropdown title="IMPLANTS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All-On-4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Aesthetic Implants
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Guided Surgeries</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Sinus Lefts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Prosthesis Types</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Tooth-ON-a-Day</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="INTERNATIONAL PATIENTS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New patients</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Walk-Through</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#deets">BLOGS</Nav.Link>

            <NavDropdown title="CONTACT" id="collasible-nav-dropdown " className="contact_link">
              <NavDropdown.Item href="#action/3.1">Omr</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Navalur
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Gachibowli</NavDropdown.Item>
           
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;