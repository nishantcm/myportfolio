// import Card from "react-bootstrap/Card";
import { Navbar, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";

export default function Header() {
    return (
        <>
            <Navbar>
                <Row>
                    <Col md={3}>
                        <Navbar.Brand href="#home">
                            <h1 className="headerColor">Nishant CM</h1>
                        </Navbar.Brand>
                    </Col>
                    <Col md={9}>
                        <Nav className="justify-content-end">
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
            </Navbar>
        </>
        // <Card>
        //     <Card.Header>
                
                
        //     </Card.Header>
        // </Card>
    );
}
