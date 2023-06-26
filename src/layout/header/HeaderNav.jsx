import { Container, Navbar, Nav } from "react-bootstrap";

export function HeaderNav() {

    const navElements = [
        {
            ref: "http://localhost:5173/",
            mess: "Home",
        },
        {
            ref: "http://localhost:5173/signup",
            mess: "Sign Up Here!",
        },
    ]


    return (

        <>
            <Navbar style={{ width: 800 }} bg="light" expand="lg" className="mt-3">
                <Container>
                    <Nav className="me-auto">
                        {navElements.map((elem, i) => (
                            <Nav.Link key={i} href={elem.ref}>
                                {elem.mess}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}
