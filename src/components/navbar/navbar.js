// @flow
import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { LangContext } from "../../context/langcontext";
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector , useDispatch} from "react-redux";

// import DropdownButton from 'react-bootstrap/DropdownButton';
export default function NavBar(props) {
  const [value, setvalue] = useState("");
  const [counter, setcounter] = useState();
  const history = useHistory();
  
  const fav = useSelector((state) => state.fav.counter);
  useEffect(() => {
    setcounter(fav)
   console.log(fav);
  },[fav])
  const { lang, setlang } = useContext(LangContext);
  function senddaata() {
    history.push(`/search?search=${value}`);
  }

  function getvalue(e) {
    setvalue(e.target.value);
    console.log(e.target.value);
    console.log(value);
  }
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          Movies
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="row">
          <Nav
            className="col-4 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Container fluid className="d-flex">
              <Link to="/favorite" className="nav-link">
                Favorites <span>{counter}</span>
              </Link>
            </Container>
          </Nav>
          <Nav className="col-4">
            {/* <Container fluid> */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => getvalue(e)}
              />
              <Button variant="outline-success" onClick={() => senddaata()}>
                {" "}
                Search
              </Button>
            </Form>
            {/* </Container> */}
          </Nav>
          <Nav className="col-4 d-flex justify-content-end">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Languages
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item onClick ={() => setlang('eng')}>English</Dropdown.Item>
                <Dropdown.Item onClick ={() => setlang('ar')}>Arabic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item className="px-4">Lang : {lang}</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
