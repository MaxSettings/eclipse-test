import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { pokemonsSelectors } from 'src/redux/pokemons/reducers/pokemons.reducer';
import { getPokemons } from 'src/redux/pokemons/actions';
import {
  AppLayout,
  AppPagination,
  ControlBar,
  PokemonsList,
} from 'src/components';
import { LoadingType } from 'src/types/LoadingType';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const pokemons = pokemonsSelectors.selectAll(state.pokemons);
  const {
    pokemons: { pokemonsLoading },
  } = state;

  const [searchValue, setSearchValue] = useState<string>('');
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page: number, pageSize: number) {
    console.log('page', page);
    console.log('pageSize', pageSize);
  }

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <AppLayout>
      <ControlBar
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
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

      {pokemonsLoading !== LoadingType.LOADING && (
        <AppPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageChange}
          total={500}
        />
      )}
    </AppLayout>
  );
}

export default App;
