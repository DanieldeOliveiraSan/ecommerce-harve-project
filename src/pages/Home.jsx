import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { MyNavBar } from "../componentes/MyNaveBar";
import { CarouselAnuncios } from "../componentes/CarouselAnuncios";

export function Home() {
  return (
    <div>
      <MyNavBar />
      <CarouselAnuncios />
      <h1>Home</h1> 
      <ListaProdutos />
    </div>
  );
}
