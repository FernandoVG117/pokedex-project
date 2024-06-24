import React from 'react';
import './styles/pokeheader.css';
import pokelogo from '../../assets/pokedex-logo.png'
import { useNavigate } from 'react-router-dom';

const Pokeheader = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pokedex');
  }

  return (
    <div className='pokeheader'>
      <div className="pokeheader__red">
        <figure className='pokeheader__img'>
          <img src={pokelogo} alt="" onClick={handleClick}/>
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