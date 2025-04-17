import { useGlobal } from "../context/GlobalContext";

const Favorite = () => {
  const { favorites, removeFromFavorites } = useGlobal();

  return (
    <div style={{ padding: 20 }}>
      <h2>Favorilər</h2>
      {favorites.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          <h4>{item.title}</h4>
          <button onClick={() => removeFromFavorites(item.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
