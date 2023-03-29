import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';

const b = cn('app-layout');

export const AppLayout: FC<Props> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames(b(), className)}>
      <header className={b('header')}>
        <h1 className={b('title')}>PoKéDeX</h1>
      </header>
      <main className={classNames(b('content'), 'container')}>{children}</main>
    </div>
  );
};
