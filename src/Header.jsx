// import Card from "react-bootstrap/Card";
import { Navbar, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Home from "./components/Home";
import About from "./components/About";
import Carousels from "./components/Carousels";
// import Stack from "react-bootstrap/Stack";

export default function Header() {
    return (
        <>
            <Navbar>
                <Container>
                    <Row className="w-100 border-2">
                        <Col md={3} lg={3}>
                            <Navbar.Brand href="#home">
                                <h3 className="headerColor ms-5 mt-3">Nishant CM</h3>
                            </Navbar.Brand>
                        </Col>
                        <Col md={9} lg={9}>
                            <Nav className="justify-content-around mt-3 customMar">
                                <Nav.Link href="#" className="headerColor">Home</Nav.Link>
                                <Nav.Link href="#" className="headerColor">About</Nav.Link>
                                <Nav.Link href="#" className="headerColor">Resume</Nav.Link>
                                <Nav.Link href="#" className="headerColor">Services</Nav.Link>
                                <Nav.Link href="#" className="headerColor">Skills</Nav.Link>
                                <Nav.Link href="#" className="headerColor">Projects</Nav.Link>
                                <Nav.Link href="#" className="headerColor">My Blogs</Nav.Link>
                                <Nav.Link href="#" className="headerColor">Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Carousels></Carousels>
            <About></About>
        </>
        // <Card>
        //     <Card.Header>
                
                
        //     </Card.Header>
        // </Card>
    );
}
