import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch';
import './styles/pokeselector.css';

const PokeSelector = ({setTypeFilter}) => {

  const [types, getTypes] = useFetch();
  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/type`;

    getTypes(url);
  }, [])

  // console.log(types?.results)

  const valueSelect = useRef()

  const handleChange = () => {
    setTypeFilter(valueSelect.current.value)
  }

  return (
    <select onChange={handleChange} ref={valueSelect}>
        <option value="">Type Pokemons</option>
        {
          types?.results.map((type) => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
    </select>
  )
}

export default PokeSelector