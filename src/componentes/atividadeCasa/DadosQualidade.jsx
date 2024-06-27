import { DadosNomeDescricao } from "./DadosNomeDescricao";

function DadosQualidade() {
  return (
    <div
      style={{
        backgroundColor: "purple",
        height: "60vh",
        width: "50%",
        color: "#fff",
        marginLeft: "25%",
        paddingLeft: "50px",
        paddingTop: "5px",
        border: "1px solid  white",
      }}
    >
      <h3>Qualidade</h3>
      <DadosNomeDescricao></DadosNomeDescricao>
    </div>
  );
}
export { DadosQualidade };
