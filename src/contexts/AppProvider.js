import React, { useState } from "react";
import { menu } from "../menu";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <AppContext.Provider value={[selectedCategory, setSelectedCategory]}>
      {children}
    </AppContext.Provider>
  );
}
