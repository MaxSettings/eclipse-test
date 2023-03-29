import {
  createEntityAdapter,
  createReducer,
  Dictionary,
} from '@reduxjs/toolkit';
import { LoadingType } from 'src/types/LoadingType';
import { getPokemons } from 'src/redux/pokemons/actions';
import { PokemonType } from 'src/types/PokemonType';
import {
  getPokemonsFailed,
  getPokemonsRequest,
  getPokemonsSuccess,
} from 'src/redux/pokemons/reducers/getPokemons';

export const pokemonsAdapter = createEntityAdapter<PokemonType>();
export const pokemonsSelectors = pokemonsAdapter.getSelectors();

export type PokemonsState = {
  entities: Dictionary<PokemonType>;
  ids: number[];
  next: string | null;
  prev: string | null;
  count: number;
  pokemonsLoading: LoadingType;
};

const initialState: PokemonsState = {
  entities: {},
  ids: [],
  next: null,
  prev: null,
  count: 0,
  pokemonsLoading: LoadingType.INITIAL,
};

export const pokemonsReducer = createReducer(initialState, {
  [getPokemons.pending.toString()]: getPokemonsRequest,
  [getPokemons.fulfilled.toString()]: getPokemonsSuccess,
  [getPokemons.rejected.toString()]: getPokemonsFailed,
});
