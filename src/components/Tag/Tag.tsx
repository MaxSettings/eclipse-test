import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';

const b = cn('tag');

export const Tag: FC<Props> = (props) => {
  const { className, text, color } = props;

  return (
    <div className={classNames(b(), className)} style={{ background: color }}>
      {text}
    </div>
  );
};
