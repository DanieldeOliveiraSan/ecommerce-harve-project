function DadosNomeDescricao(props4) {
  return (
    <div
      style={{
        width: "80%",
        right: "40px",
        backgroundColor: "purple",
        border: "1px solid white",
      }}
    >
      <div>Nome: {props4.nome}</div>
      <div>Descrição: {props4.descricao}</div>
    </div>
  );
}
export { DadosNomeDescricao };
