function ComponenteResumoSobreVoce(props) {
  return (
    <div>
      <div> Resumo sobre Você</div>
      <h2> {props.children}</h2>
    </div>
  );
}
function Language() {
  return (
    <div>
      <p>Português</p>
    </div>
  );
}
function Language2() {
  return (
    <div>
      <p> Inglês</p>
    </div>
  );
}

function Language3() {
  return (
    <div>
      <p> Espanhol</p>
    </div>
  );
}

export { ComponenteResumoSobreVoce, Language, Language2, Language3 };
