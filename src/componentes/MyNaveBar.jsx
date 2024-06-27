import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LoginV2 } from "../pages/LoginV2";
import { GerenciarLogin } from "../pages/GerenciarLogin";

function MyNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Harve.Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produto">Produtos</Nav.Link>
          </Nav>
          <Container>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <GerenciarLogin />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export { MyNavBar };
