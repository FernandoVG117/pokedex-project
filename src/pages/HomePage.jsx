import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pokeimg from '../assets/pokedex-logo.png';
import './styles/homepage.css'; 

const HomePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');
  }

  return (
    <div className='homepage'>
      <div className="homepage__container">
        <figure className='homepage__title'>
          <img src={pokeimg} alt="pokedex" />
        </figure>
        <h2 className='homepage__hello'>Welcome Trainer!</h2>
        <p className='homepage__presentation'>Your adventure is begining! <br /> to start, give me your name: </p>
        <form onSubmit={handleSubmit} className='homepage__form'>
          <input type="text" ref={textInput} className='homepage__input' />
          <button className='homepage__btn'>START</button>
        </form>
      </div>
    </div>

  )
}

export default HomePage