import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { pokemonsSelectors } from 'src/redux/pokemons/reducers/pokemons.reducer';
import { getPokemons } from 'src/redux/pokemons/actions';
import {
  AppLayout,
  AppPagination,
  AppSpinner,
  ControlBar,
  EmptyListStub,
  PokemonsList,
} from 'src/components';
import { LoadingType } from 'src/types/LoadingType';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const pokemons = pokemonsSelectors.selectAll(state.pokemons);
  const {
    pokemons: { pokemonsLoading, count },
  } = state;

  const [searchValue, setSearchValue] = useState<string>('');
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page: number, pageSize: number) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    dispatch(getPokemons({ pageSize, offset: (page - 1) * pageSize }));
    console.log('handlePageChange');
  }

  function handlePageSizeChange(page: number, pageSize: number): void {
    setPageSize(pageSize);
    window.scrollTo(0, 0);
    dispatch(getPokemons({ pageSize }));
    console.log('handlePageSizeChange');
  }

  useEffect(() => {
    dispatch(getPokemons({ pageSize }));
  }, []);

  function getContent() {
    if (pokemons.length && (searchValue !== '' || activeTypes.length)) {
      return <EmptyListStub />;
    } else {
      return (
        <>
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
          <AppPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            currentPageSize={pageSize}
            total={count}
          />
        </>
      );
    }
  }

  return (
    <AppLayout>
      <ControlBar
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        activeTypes={activeTypes}
        setActiveTypes={setActiveTypes}
      />
      {pokemonsLoading === LoadingType.LOADING ? <AppSpinner /> : getContent()}
    </AppLayout>
  );
}

export default App;
