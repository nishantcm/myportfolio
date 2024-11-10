// import Card from "react-bootstrap/Card";
import { Container, Navbar, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="navStyle">
                    <Row>
                        <Col md={3}>
                            <Navbar.Brand href="#home">
                                <h1>Nishant CM</h1>
                            </Navbar.Brand>
                        </Col>
                        <Col md={9}>
                            <Nav className="">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                                <Nav.Link href="#">Resume</Nav.Link>
                                <Nav.Link href="#">Services</Nav.Link>
                                <Nav.Link href="#">Skills</Nav.Link>
                                <Nav.Link href="#">Projects</Nav.Link>
                                <Nav.Link href="#">My Blogs</Nav.Link>
                                <Nav.Link href="#">Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                    
                    
                </Container>
            </Navbar>
        </>
        // <Card>
        //     <Card.Header>
                
                
        //     </Card.Header>
        // </Card>
    );
}
