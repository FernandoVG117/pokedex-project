import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelector from '../components/pokeselector/PokeSelector';
import Pagination from '../components/pagination/Pagination';
import './styles/pokedex.css';

const Pokedex = () => {
  const [inputValue, setInputValue] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(12); 
  const trainer = useSelector((store) => store.trainer);
  const [typeFilter, setTypeFilter] = useState('');

  const [pokemons, getPokemons, getTypes] = useFetch();

  useEffect(() => {
    if (typeFilter) {
      getTypes(typeFilter);
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1400';
      getPokemons(url);
    }
  }, [typeFilter])

  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = '';
  }

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setPage(1); 
  }

  const callbackFilter = (poke) => {
    return poke.name.includes(inputValue);
  }

  // pagination
  const [page, setPage] = useState(1);
  const quantity = itemsPerPage;
  const filteredPokemons = pokemons?.results?.filter(callbackFilter) || [];
  const total = Math.ceil(filteredPokemons.length / quantity);

  const paginatedPokemons = () => {
    const end = quantity * page;
    const start = end - quantity;
    return filteredPokemons.slice(start, end);
  }

  return (
    <div className='pokedex'>
      <div className="pokedex__header">
        <h3 className='pokedex__title'>
          Welcome <span className='pokedex__wave'>{trainer}</span>, <span>here you can find your favorite pokemon.</span>
        </h3>
        <div className='pokedex__filter'>
          <div className='pokedex__items-per-page'>
            <label htmlFor='itemsPerPage' className='pokedex__label'>Items:</label>
            <input 
              type='number' 
              id='itemsPerPage' 
              value={itemsPerPage} 
              onChange={handleItemsPerPageChange} 
              className='pokedex__input-number' 
              min={1} 
            />
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" ref={textInput} className='pokedex__input' />
            <button className='pokedex__btn'>Search</button>
          </form>
          <PokeSelector 
            setTypeFilter={setTypeFilter}
          />
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        total={total}
      />
      <div className="pokedex__container">
        {
          paginatedPokemons().map((poke) => (
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        total={total}
      />
    </div>
  )
}

export default Pokedex;