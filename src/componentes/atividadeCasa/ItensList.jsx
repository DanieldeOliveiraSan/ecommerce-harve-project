const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h2>{item.nome}</h2>
          <p>{item.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
