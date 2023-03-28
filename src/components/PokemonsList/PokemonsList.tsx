import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';

const b = cn('pokemons-list');

export const PokemonsList: FC<Props> = (props) => {
  const { className, pokemons } = props;

  return (
    <ul className={classNames(b(), className)}>
      {pokemons.map((pokemon) => {
        return <li key={pokemon.id}>{pokemon.name}</li>;
      })}
    </ul>
  );
};
