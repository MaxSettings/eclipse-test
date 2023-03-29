import React, { FC, useState } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { AppTag, PokemonModal } from 'src/components';
import { getTagColorByType } from 'src/helpers/getTagColorByType';
import ImagePokeball from 'src/assets/images/pokeball-image.png';

const b = cn('pokemon-item');

export const PokemonItem: FC<Props> = (props) => {
  const { className, pokemon } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={classNames(b(), className)}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          className={b('image')}
          src={pokemon.sprites.other.dream_world.front_default || ImagePokeball}
          alt=""
        />
        <div className={b('inner')}>
          <h3 className={b('name')}>{pokemon.name}</h3>
          <h4 className={b('info')}>Height: {pokemon.height}</h4>
          <h4 className={b('info')}>Weight: {pokemon.weight}</h4>
          <ul className={b('types')}>
            {pokemon.types.map((it, index) => {
              return (
                <li className={b('type')} key={index}>
                  <AppTag
                    text={it.type.name}
                    color={getTagColorByType(it.type.name)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </button>
      <PokemonModal
        pokemon={pokemon}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};
