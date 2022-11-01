import { Route, Routes } from 'react-router-dom';
import { Pokedex, Pokemon } from '../pages';

export const PokemonRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Pokedex />}/>
      <Route path=":id" element={<Pokemon />}/>
    </Routes>
  )
}
