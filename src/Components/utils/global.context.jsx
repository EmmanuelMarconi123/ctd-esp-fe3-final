import axios from "axios";
import { createContext, useContext, useReducer, useState, useEffect } from "react";

const ContextGlobal = createContext();

export const initialState = {theme:true , dentista:[], dentistasFav:[]}

const reducer = (state, action) => {
  switch (action.type) {
    case 'getList':
      return {...state, dentista: action.payload}
    case 'dark':
      return {...state, theme: action.payload}
    case 'addFavs':
      return{ ...state, dentistasFav: action.payload}
    default:
      throw new Error()
  }
}


export const ContextProvider = ({ children }) => {

  const url = 'https://jsonplaceholder.typicode.com/users'

  // const [modoOscuro, setModoOscuro] = useState()

  const [state, dispatch] = useReducer(reducer, initialState)

 
  useEffect(()=>{
    axios.get(url)
    .then((resp) => {dispatch({type: 'getList', payload: resp.data})})
  }, [])


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContexGlobal = ()=> useContext(ContextGlobal)
