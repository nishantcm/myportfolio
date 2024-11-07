// import Card from "react-bootstrap/Card";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
// import Stack from "react-bootstrap/Stack";

export default function Header() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <h1>Nishant CM</h1>
                    </Navbar.Brand>
                    <Nav className="d-flex justify-content-around">
                        <Nav.Link href="#home">Home</Nav.Link>

                        <Nav.Link href="#">About</Nav.Link>

                        <Nav.Link href="#">Resume</Nav.Link>

                        <Nav.Link href="#">Services</Nav.Link>

                        <Nav.Link href="#">Skills</Nav.Link>

                        <Nav.Link href="#">Projects</Nav.Link>

                        <Nav.Link href="#">My Blogs</Nav.Link>

                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
        // <Card>
        //     <Card.Header>
                
                
        //     </Card.Header>
        // </Card>
    );
}
