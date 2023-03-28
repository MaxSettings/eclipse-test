import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { pokemonsSelectors } from 'src/redux/pokemons/reducers/pokemons.reducer';
import { getPokemons } from 'src/redux/pokemons/actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const pokemons = pokemonsSelectors.selectAll(state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="app">
      <h1>POKEMONS</h1>

      {pokemons.map((pokemon) => {
        return <p key={pokemon.name}>{pokemon.name}</p>;
      })}
    </div>
  );
}

export default App;
