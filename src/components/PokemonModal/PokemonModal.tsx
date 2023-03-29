import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { Modal } from 'antd';
import { AppTag } from 'src/components';
import { getTagColorByType } from 'src/helpers/getTagColorByType';
import ImagePokeball from 'src/assets/images/pokeball-image.png';

const b = cn('pokemon-modal');

export const PokemonModal: FC<Props> = (props) => {
  const { className, isModalOpen, setIsModalOpen, pokemon } = props;

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      className={classNames(b(), className)}
    >
      <div className={b('content')}>
        <h3 className={b('name')}>{pokemon.name}</h3>
        <img
          className={b('image')}
          src={pokemon.sprites.other.dream_world.front_default || ImagePokeball}
          alt={pokemon.name}
        />
        <h4 className={b('title')}>Pokemon Info</h4>
        <p className={b('info')}>
          <b>Height:</b> {pokemon.height}
        </p>
        <p className={b('info')}>
          <b>Weight:</b> {pokemon.weight}
        </p>
        <p className={b('info')}>
          <b>Abilities:</b>{' '}
          {pokemon.abilities.reduce((acc, it, index) => {
            return `${acc}${index ? ', ' : ''}${it.ability.name}`;
          }, '')}
        </p>

        <p className={b('info')}>
          <b>Type:</b>{' '}
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
        </p>
      </div>
    </Modal>
  );
};
