import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <h1>Pokedex</h1>
      <h2>Hi Trainer</h2>
      <p>to start, give me your name: </p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={textInput} />
        <button>START</button>
      </form>
    </div>

  )
}

export default HomePage