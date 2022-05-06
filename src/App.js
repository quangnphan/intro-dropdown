import logo from "./images/logo.svg";
// import arrowDown from "./images/icon-arrow-down.svg";
// import arrowUp from "./images/icon-arrow-up.svg";
import audiophile from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import calendar from "./images/icon-calendar.svg";
// import close from "./images/icon-close-menu.svg";
// import menu from "./images/icon-menu.svg";
import planning from "./images/icon-planning.svg";
import reminder from "./images/icon-reminders.svg";
import todo from "./images/icon-todo.svg";
import heroDesktop from "./images/image-hero-desktop.png";
// import heroMobile from "./images/image-hero-mobile.png";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="wrapper">
      <div className="component">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown className="dropdown" title="Features" id="collasible-nav-dropdown">
                <NavDropdown.Item className="dropdown-item"><img src={todo} alt="todo-img"></img>Todo List</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item"><img src={calendar} alt="cld-img"></img>Calendar</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item"><img src={reminder} alt="rmd-img"></img>Reminders</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item"><img src={planning} alt="pl-img"></img>Planning</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="navbarScrollingDropdown">
                <NavDropdown.Item>History</NavDropdown.Item>
                <NavDropdown.Item>Our Teams</NavDropdown.Item>
                <NavDropdown.Item>Blog</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Careers</Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="cbtn" style={{padding:"10px 20px"}}>Login</Nav.Link>
              <Nav.Link className="custom-button cbtn" style={{padding:"10px 20px"}}>Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="hero">
          <div className="hero-heading">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location.</p>
            <p>
              Streamline processes, create team rituals, and watch productivity.
            </p>
            <button>Learn more</button>
            <div className="images">
              <img src={databiz} alt="databiz"></img>
              <img src={audiophile} alt="audiphile"></img>
              <img src={meet} alt="meet"></img>
              <img src={maker} alt="maker"></img>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroDesktop} alt="img-hero"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
