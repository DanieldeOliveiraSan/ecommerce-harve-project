import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { MyNavBar } from "../componentes/MyNaveBar";
import { CarouselAnuncios } from "../componentes/CarouselAnuncios";

function Produto() {
  return (
    <Container>
      <MyNavBar />
      <CarouselAnuncios />
      <p>Aqui vai o produto</p>
      <ListaProdutos />
    </Container>
  );
}

export { Produto };
