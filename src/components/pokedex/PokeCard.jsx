import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import './pokecard.css';

const PokeCard = ({ url }) => {

  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    getPokemon(url);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`);
  }

  console.log(pokemon)

  return (
    <article onClick={handleClick} className={`pokecard ${pokemon?.types[0].type.name}`}>
      <div className={`pokecard__back ${pokemon?.types[0].type.name}`}></div>
      <figure className='pokecard__img'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
      </figure>
      <h3 className={`pokecard__name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
      <ul className='pokecard__types'>
        {
          pokemon?.types.map((type) => (
            <li key={type.type.url} className={`slot${type.slot}`}>
              {type.type.name}
            </li>
          ))
        }
      </ul>
      <span className='pokecard__txtType'>Type</span>
      <hr className='pokecard__hr' />
      <ul className={`pokecard__stats ${pokemon?.types[0].type.name}`}>
        {
          pokemon?.stats.map((stat) => (
            !stat.stat.name.includes('special') &&
            <li key={stat.stat.url} >
              <span>{stat.stat.name}</span>
              <span>{stat.base_stat}</span>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default PokeCard