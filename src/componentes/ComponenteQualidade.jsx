function ComponenteQualidade(props){
    return(
        <div
        style={{
                background: "#000",
                color: "#fff",
                width: "40%",
                marginLeft: "30%",
                padding: "2%",
                border: "2px solid yellow",
                }}>
                <h3>QUALIDADES</h3>
            <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#bcbcbc",
                color: "#1a2d4d",
                marginLeft: "5%",
                padding: "2%",
                border: "4px solid red",
                }}
                >
                <div>Nome:{ props.nome} Descrição:{ props.descricao}</div>
            </div>
        </div>
    );
}

export { ComponenteQualidade };