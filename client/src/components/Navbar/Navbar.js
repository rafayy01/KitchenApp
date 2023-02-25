import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import  {Link} from "react-router-dom";
import "./Navbar.css"
function NavBar() {
  return (
    <Row>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="link">
            <Navbar.Brand>Kitchen Prep</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="meal" className="link m-1">
              <span >Meal</span>
            </Link>
            <Link to="clients" className="link m-1">
              <span >Client</span>
            </Link>
            <Link to="subs" className="link m-1">
              <span >Subs</span>
            </Link>
            <Link to="cookinground" className="link m-1">
              <span >CookingRound</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
