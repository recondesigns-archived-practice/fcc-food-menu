import React, { useState, useEffect } from "react";
import { menu } from "../menu";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    if (menu) {
      setMenuItems(() => [...menu]);
    }
  }, []);

  return (
    <AppContext.Provider value={[menuItems, setMenuItems]}>
      {children}
    </AppContext.Provider>
  );
}
