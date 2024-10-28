import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";

export default function Header() {
    return (
        <Card>
            <Card.Header>
                <Stack direction="horizontal">
                    <Navbar className="" defaultActiveKey="#first">
                        <Navbar.Item>
                            <Navbar.Link href="#first">Home</Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link href="#">About</Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link href="#">Resume</Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link href="#">Services</Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link href="#">Skills</Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link href="#">Projects</Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link href="#">My Blogs</Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link href="#">Contact</Navbar.Link>
                        </Navbar.Item>
                    </Navbar>
                </Stack>
                
            </Card.Header>
        </Card>
    );
}
