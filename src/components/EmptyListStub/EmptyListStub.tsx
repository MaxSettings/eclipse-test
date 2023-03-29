import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import ImagePsyduck from 'src/assets/images/psyduck-image.png';

const b = cn('empty-list-stub');

export const EmptyListStub: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(b(), className)}>
      <img className={b('image')} src={ImagePsyduck} alt="psyduck" />
      <h3 className={b('text')}>No data found!</h3>
    </div>
  );
};
