import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../context/ContextAPI';

const Pokemones = () => {
  const { pokeApi } = useContext(ContextAPI);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokeApi()
      .then(data => {
        // Verifica que 'results' esté presente y no esté vacío
        if (data.results && data.results.length > 0) {
          setPokemons(data.results);
        } else {
          console.error('Los datos recibidos no tienen la propiedad "results" o está vacía.', data);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, [pokeApi]);

  return (
    <div>
      <h2>Selecciona un pokémon</h2>
      <select>
        {pokemons.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button style={{backgroundColor:"black", color:"white"}}>Ver detalle</button>
    </div>
  );
};

export default Pokemones;
