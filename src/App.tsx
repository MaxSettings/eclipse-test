import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { pokemonsSelectors } from 'src/redux/pokemons/reducers/pokemons.reducer';
import { getPokemons } from 'src/redux/pokemons/actions';
import { AppLayout, PokemonsList } from 'src/components';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const pokemons = pokemonsSelectors.selectAll(state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <AppLayout>
      <PokemonsList pokemons={pokemons} />
    </AppLayout>
  );
}

export default App;
