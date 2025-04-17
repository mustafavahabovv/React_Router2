import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const [basket, setBasket] = useState(() => {
    return JSON.parse(localStorage.getItem("basket")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToFavorites = (item) => {
    if (!favorites.find((f) => f.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const addToBasket = (item) => {
    const found = basket.find((b) => b.id === item.id);
    if (found) {
      setBasket(
        basket.map((b) =>
          b.id === item.id ? { ...b, count: b.count + 1 } : b
        )
      );
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const increaseCount = (id) => {
    setBasket(
      basket.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id) => {
    setBasket(
      basket
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        basket,
        addToFavorites,
        removeFromFavorites,
        addToBasket,
        removeFromBasket,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;