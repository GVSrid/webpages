import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null); 

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    console.log("ThemeContext Value:", context);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  }
  

