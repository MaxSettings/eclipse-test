import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, endpoints } from 'src/api/api';
import { PokemonType } from 'src/types/PokemonType';

export type GetPokemonsResponse = {
  count: number;
  results: PokemonType[];
  next: string | null;
  previous: string | null;
};

export type GetPokemonsReturn = GetPokemonsResponse;

export type GetPokemonsParams = { pageSize: number; offset?: number };

export const getPokemons = createAsyncThunk<
  GetPokemonsReturn,
  GetPokemonsParams
>('pokemons/getPokemons', async (params, thunkAPI) => {
  try {
    const currentOffset = params.offset ? params.offset : 0;

    const pokemons: GetPokemonsResponse = await API.get(
      `${endpoints.getPokemons}?limit=${params.pageSize}&offset=${currentOffset}`
    );

    const pokemonsInfo = (await Promise.all(
      pokemons.results.map(async (pokemon) => {
        return await API.get(`${endpoints.getPokemons}/${pokemon.name}`);
      })
    )) as PokemonType[];

    return { ...pokemons, results: pokemonsInfo };
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
