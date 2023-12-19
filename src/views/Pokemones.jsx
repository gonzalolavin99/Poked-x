import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../context/ContextAPI';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
  const { pokeApi } = useContext(ContextAPI);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    pokeApi()
      .then(data => {
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

  const handlePokemonSelect = (event) => {
    const selectedPokemonName = event.target.value;
    const selectedPokemon = pokemons.find(pokemon => pokemon.name === selectedPokemonName);
    setSelectedPokemon(selectedPokemon);
  };

  const handleVerDetalleClick = () => {
    if (selectedPokemon) {
     
      navigate(`/pokemones/${selectedPokemon.name}`, { state: { pokemon: selectedPokemon } });
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h2>Selecciona un pokémon</h2>
      <select onChange={handlePokemonSelect} style={{width:"40vw"}}>
        {pokemons.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button style={{backgroundColor:"black", color:"white", width:"40vw"}} onClick={handleVerDetalleClick}>
        Ver detalle
      </button>
    </div>
  );
};

export default Pokemones;
