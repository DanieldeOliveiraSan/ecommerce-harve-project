function DadosInstitucao(props3) {
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
      <h3>Formação</h3>
      <div>Instituição: {props3.instituicao}</div>
      <div>Curso: {props3.curso}</div>
    </div>
  );
}

export { DadosInstitucao };
