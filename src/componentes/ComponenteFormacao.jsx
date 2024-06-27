function ComponenteFormacao(props){
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
            <h3>FORMAÇÃO</h3>
            <div>{ props.instituicao }</div>
            <div>{ props.curso }</div>
        </div>
    );
}

export { ComponenteFormacao };