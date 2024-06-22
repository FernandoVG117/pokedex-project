import React from 'react';
import './styles/pokeheader.css';
import pokelogo from './styles/pokedex-logo.png'

const Pokeheader = () => {
  return (
    <div className='pokeheader'>
      <div className="pokeheader__red">
        <figure className='pokeheader__img'>
          <img src={pokelogo} alt="" />
        </figure>
      </div>
      <div className="pokeheader__black">
        <div className="pokeheader__outcircle">
          <div className="pokeheader__incircle"></div>
        </div>
      </div>
    </div>
  )
}

export default Pokeheader