import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToFavorites, addToBasket } = useGlobal();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: 20 }}>
      {products.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid #ddd", padding: 10, width: 200 }}
        >
          <img src={item.image} alt={item.title} width={100} height={100} />
          <h4>{item.title}</h4>
          <p>{item.price} $</p>
          <button onClick={() => addToFavorites(item)}>Favori</button>
          <button onClick={() => addToBasket(item)}>Səbətə at</button>
        </div>
      ))}
    </div>
  );
};

export default Home;