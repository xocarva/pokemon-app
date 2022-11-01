import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../store/slices/pokemon';

export const Pokedex = () => {

  const dispatch = useDispatch();

  const { page, pokemons = [], isLoading } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h2>Pokedex</h2>
      <span>Page {page}</span>
      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
      {
        isLoading
          ? <h2>Loading...</h2>
          : <ul className='pokelist'>
              {
                pokemons.map(pokemon => (
                  <article>
                    <h4>{pokemon.name}</h4>
                    <img src={pokemon.imageURL} alt={pokemon.name}/>
                    <h5>Abilities</h5>
                    <ol>
                      {
                        pokemon.abilities.map(ability => (
                          <li key={ability}>{ability}</li>
                        ))
                      }
                    </ol>
                  </article>
                ))
              }
            </ul>
      }
    </>
  )
}
