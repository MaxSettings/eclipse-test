import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { Tag } from 'src/components/Tag/Tag';
import { getTagColorByType } from 'src/helpers/getTagColorByType';

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
        <ul className={b('types')}>
          {pokemon.types.map((it, index) => {
            return (
              <li className={b('type')} key={index}>
                <Tag
                  text={it.type.name}
                  color={getTagColorByType(it.type.name)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
