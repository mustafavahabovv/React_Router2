import { useGlobal } from "../context/GlobalContext";

const Basket = () => {
  const {
    basket,
    removeFromBasket,
    increaseCount,
    decreaseCount,
  } = useGlobal();

  return (
    <div style={{ padding: 20 }}>
      <h2>Səbət</h2>
      {basket.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          <h4>{item.title}</h4>
          <p>Say: {item.count}</p>
          <button onClick={() => increaseCount(item.id)}>+</button>
          <button onClick={() => decreaseCount(item.id)}>-</button>
          <button onClick={() => removeFromBasket(item.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default Basket;
