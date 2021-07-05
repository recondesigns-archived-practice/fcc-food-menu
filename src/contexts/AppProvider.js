import React, { useState, useEffect } from "react";
import { menu } from "../menu";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    if (menu) {
      setMenuList(() => [...menu]);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        category: { selectedCategory, setSelectedCategory },
        menu: { menuList, setMenuList }
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
