import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Pokedex from './pages/Pokedex';
import PokeInfo from './pages/PokeInfo';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Pokefooter from './components/shared/Pokefooter';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokeInfo />}/>
        </Route>
      </Routes>
      <Pokefooter />
    </>
  )
}

export default App
