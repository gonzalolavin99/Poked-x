import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextAPI } from "../context/ContextAPI"; 

const Bar = () => {
    const { pokeApi } = useContext(ContextAPI);

    const getStyle = ({ isActive }) => (isActive ? "linkActivo" : "linkNormal");

    return (
        <div style={{fontSize:"1.2em", color: "white", backgroundColor: "#58595b", display: "flex", justifyContent: "space-between", alignItems: "center", width: "98vw", padding: "1rem" }}>
            <div>
                <img src="../src/assets/imgs/Captura de pantalla 2023-12-14 222933.png" alt=""/>
            </div>
            <div>
                <NavLink to="/" className={getStyle}>
                    Home
                </NavLink>
                <NavLink to="/pokemones" className={getStyle} onClick={pokeApi}>
                    Pokemones
                </NavLink>
            </div>
        </div>
    );
};

export default Bar;
