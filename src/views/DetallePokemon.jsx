import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetallePokemon = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{name}</h2>
      {pokemonDetails ? (
        <div>
          <p>Nombre: {pokemonDetails.name}</p>
          <p><img src={pokemonDetails.sprites.front_default} alt={name} style={{width:"20vw"}} /></p>
          <p>Peso: {pokemonDetails.weight}</p>
          <p>Estadísticas:</p>
          <ul>
            {pokemonDetails.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default DetallePokemon;
