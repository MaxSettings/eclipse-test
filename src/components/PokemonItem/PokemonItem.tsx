import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';

const b = cn('pokemon-item');

export const PokemonItem: FC<Props> = (props) => {
  const { className, pokemon } = props;

  return (
    <div className={classNames(b(), className)}>
      <img
        className={b('image')}
        src={pokemon.sprites.other.dream_world.front_default}
        alt=""
      />
      <div>
        <h3 className={b('name')}>{pokemon.name}</h3>
        <h4 className={b('info')}>Height: {pokemon.height}</h4>
        <h4 className={b('info')}>Weight: {pokemon.weight}</h4>
        <h4 className={b('info')}>
          Type:{' '}
          {pokemon.types.reduce((acc, it, index) => {
            return `${acc}${index === 0 ? '' : ', '}${it.type.name}`;
          }, '')}
        </h4>
      </div>
    </div>
  );
};
