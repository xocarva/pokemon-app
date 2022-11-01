import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/pages';
import { PokemonRouter } from '../Pokemon/routes/PokemonRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pokemon/*' element={<PokemonRouter />}/>
    </Routes>
  )
}
