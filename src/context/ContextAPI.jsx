import React, { createContext } from "react";

export const ContextAPI = createContext({ pokeApi: {} });

const ContextProvider = ({ children }) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const pokeApi = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.results) {
        console.log(data);
        return data;
      } else {
        console.error('Los datos de la API no tienen la propiedad "results".', data);
        return { results: [] }; 
      }
    } catch (err) {
      console.log("Error al traer los datos de la API", err);
      return { results: [] }; 
    }
  };

  return (
    <ContextAPI.Provider value={{ pokeApi }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextProvider;
