function DadosNome(props) {
  return (
    <div
      style={{
        backgroundColor: "purple",
        height: "25vh",
        width: "50%",
        color: "#fff",
        marginLeft: "25%",
        paddingLeft: "50px",
        paddingTop: "5px",
        border: "1px solid  white",
      }}
    >
      <h3>Nome</h3>
      <div>Nome: {props.nome}</div>
      <div>Idade: {props.idade}</div>
      <div>Telefone: {props.telefone}</div>
    </div>
  );
}

export { DadosNome };
