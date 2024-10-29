import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
// import Stack from "react-bootstrap/Stack";

export default function Header() {
    return (
        <Card>
            <Card.Header>
                    <Nav defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">My Blogs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                
            </Card.Header>
        </Card>
    );
}
