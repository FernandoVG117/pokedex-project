import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import './styles/pokeinfo.css';

const PokeInfo = () => {

  const { id } = useParams();

  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    getPokemon(url);
  }, [])

  console.log(pokemon)
  

  return (
    <section className='pokeinfo'>
      <figure className='pokeinfo__img'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
      </figure>
      <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map((stat) => (
            <li key={stat.url} className='pokeinfo__stats-item'>
              <span>{stat.stat.name}</span><span>{stat.base_stat} / 250</span>
              <div className='pokeinfo__outbar'>
                <div className='pokeinfo__inbar' style={{width: `${stat.base_stat / 2.5}%`}}></div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default PokeInfo