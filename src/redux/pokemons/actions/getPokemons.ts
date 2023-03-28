import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, endpoints } from 'src/api/api';
import { PokemonType } from 'src/types/PokemonType';

export type GetPokemonsResponse = {
  count: number;
  results: PokemonType[];
  next: string | null;
  previous: string | null;
};

export type GetPokemonsReturn = GetPokemonsResponse[`results`];

export const getPokemons = createAsyncThunk<GetPokemonsReturn, void>(
  'pokemons/getPokemons',
  async (params, thunkAPI) => {
    try {
      const pokemons: GetPokemonsResponse = await API.get(
        endpoints.getPokemons
      );

      return await Promise.all(
        pokemons.results.map(async (pokemon) => {
          return await API.get(`${endpoints.getPokemons}/${pokemon.name}`);
        })
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
