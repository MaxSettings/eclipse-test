import React, { useEffect, useState } from 'react';
import { RadioChangeEvent } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { pokemonsSelectors } from 'src/redux/pokemons/reducers/pokemons.reducer';
import { getPokemons } from 'src/redux/pokemons/actions';
import { AppLayout, ControlBar, PokemonsList } from 'src/components';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const pokemons = pokemonsSelectors.selectAll(state.pokemons);

  const [searchValue, setSearchValue] = useState<string>('');
  const [countPerPage, setCountPerPage] = useState<number>(1);
  const [activeTypes, setActiveTypes] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <AppLayout>
      <ControlBar
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        countPerPage={countPerPage}
        onCountPerPageChange={(e: RadioChangeEvent) => {
          setCountPerPage(e.target.value);
        }}
        activeTypes={activeTypes}
        setActiveTypes={setActiveTypes}
      />
      <PokemonsList
        pokemons={pokemons.filter((it) => {
          return (
            ((activeTypes.length &&
              it.types.some((it) => {
                return activeTypes.includes(it.type.name);
              })) ||
              !activeTypes.length) &&
            it.name.toLowerCase().includes(searchValue.toLowerCase())
          );
        })}
      />
    </AppLayout>
  );
}

export default App;
