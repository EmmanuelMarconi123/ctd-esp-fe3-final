import { createContext, useEffect, useState } from "react";

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [dark, setDark] = useState(false)

  const data = {
    dark,
    setDark
  }

 useEffect(() => {
    const page = document.body
    page.classList.toggle('dark')
  }, [dark])


  return (
    <ContextGlobal.Provider value={{ data }}>
      {children}
    </ContextGlobal.Provider>
  );
};
