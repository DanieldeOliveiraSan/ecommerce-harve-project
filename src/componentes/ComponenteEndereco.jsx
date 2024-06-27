function ComponenteEndereco (props){
    return(
        <div
        style={{
            background: "#000",
            color: "#fff",
            width: "40%",
            marginLeft: "30%",
            padding: "2%",
            border: "2px solid yellow",
            }}
        >
        <h3>ENDEREÇO</h3>
        <div>{ props.rua}</div>        
        <div>{ props.bairro}</div>        
        <div>{ props.numero}</div>        
        <div>{ props.complemento}</div>        
        </div>
    );
}

export { ComponenteEndereco };