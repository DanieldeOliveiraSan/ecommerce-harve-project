import { useState, useEffect } from "react";

function ComponenteNome() {
  const [nome, setNome] = useState("YOUR NAME");

  useEffect(() => {
    alert(`SEU NOME FOI ALTERADO PARA ${nome}`);
  }, [nome]);

  return (
    <div>
      <button onClick={() => setNome("YOUR NICKNAME")}>
        Change for nickname
      </button>
      <button onClick={() => setNome("YOUR NAME")}>Change for name</button>

      <p>Name: {nome}</p>
    </div>
  );
}

export { ComponenteNome };
