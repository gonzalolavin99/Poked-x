import React, { createContext } from "react";

export const ContextAPI = createContext({pokeApi:{}});

const ContextProvider = ({ children }) => {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const pokeApi = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);  

        } catch (err) {
            console.log("Error al traer los datos de la API", err);
        }
    };

    return (
        <ContextAPI.Provider value={{ pokeApi }}>
            {children}
        </ContextAPI.Provider>
    );
};

export default ContextProvider;