function DadosEndereco(props2) {
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
      <h3>Endereço</h3>
      <div> Rua: {props2.rua}</div>
      <div> Bairro: {props2.bairro}</div>
      <div> Número: {props2.numero}</div>
      <div> Complemento: {props2.complemento}</div>
    </div>
  );
}
export { DadosEndereco };
