import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons/reducers/pokemons.reducer';

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});
