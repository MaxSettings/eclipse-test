import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { PokemonItem, EmptyListStub } from 'src/components';

const b = cn('pokemons-list');

export const PokemonsList: FC<Props> = (props) => {
  const { className, pokemons } = props;

  if (!pokemons.length) {
    return <EmptyListStub />;
  }

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
