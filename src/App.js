import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { RouteApp } from "./route";
import { MyNavBar } from "./componentes/MyNaveBar.jsx";
import { CarouselAnuncios } from "./componentes/CarouselAnuncios.jsx";

function App() {
  return (
    <>
      
      <RouteApp />;
      <ToastContainer />
    </>
  );
}

export default App;
