import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelector from '../components/pokeselector/PokeSelector';
import './styles/pokedex.css'

const Pokedex = () => {

  const [inputValue, setInputValue] = useState('');
  const trainer = useSelector((store) => store.trainer);
  const [typeFilter, setTypeFilter] = useState('');
  
  const [pokemons, getPokemons, getTypes] = useFetch();
  
  useEffect(() => {
    if(typeFilter){
      getTypes(typeFilter);
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
      getPokemons(url);
    }
  }, [typeFilter])

  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = '';
  }

  const callbackFilter = (poke) => {
    return poke.name.includes(inputValue);
  }
  
  console.log(typeFilter)

  return (
    <div className='pokedex'>
      <div className="pokedex__header">
        <h3 className='pokedex__title'>Welcome <span className='pokedex__wave'>{trainer}</span>, <span>here you can find your favorite pokemon.</span></h3>
        <div className='pokedex__filter' >
          <form onSubmit={handleSubmit}>
            <input type="text" ref={textInput} className='pokedex__input' />
            <button className='pokedex__btn'>Search</button>
          </form>
          <PokeSelector 
            setTypeFilter={setTypeFilter}
          />
        </div>
      </div>
      <div className="pokedex__container">
        {
          pokemons?.results.filter(callbackFilter).map((poke) => (
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex