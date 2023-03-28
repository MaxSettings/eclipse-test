import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { PokemonItem } from 'src/components/PokemonItem/PokemonItem';

const b = cn('pokemons-list');

export const PokemonsList: FC<Props> = (props) => {
  const { className, pokemons } = props;

  return (
    <ul className={classNames(b(), className)}>
      {pokemons.map((pokemon) => {
        return (
          <li className={b('item')} key={pokemon.id}>
            <PokemonItem pokemon={pokemon} />
          </li>
        );
      })}
    </ul>
  );
};
