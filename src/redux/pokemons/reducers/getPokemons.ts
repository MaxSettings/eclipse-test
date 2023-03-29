import { Action } from 'redux';
import { LoadingType } from 'src/types/LoadingType';
import { GetPokemonsReturn } from './../actions';
import { pokemonsAdapter, PokemonsState } from './pokemons.reducer';

type GetBrandsAction = {
  payload: GetPokemonsReturn;
} & Action;

export const getPokemonsRequest = (state: PokemonsState): PokemonsState => ({
  ...state,
  pokemonsLoading: LoadingType.LOADING,
});

export const getPokemonsSuccess = (
  state: PokemonsState,
  action: GetBrandsAction
) => {
  pokemonsAdapter.removeAll(state);
  pokemonsAdapter.upsertMany(state, action.payload.results);

  state.prev = action.payload.previous;
  state.next = action.payload.next;
  state.count = action.payload.count;
  state.pokemonsLoading = LoadingType.LOADED;
};

export const getPokemonsFailed = (state: PokemonsState): PokemonsState => ({
  ...state,
  pokemonsLoading: LoadingType.LOADED_WITH_ERROR,
});
