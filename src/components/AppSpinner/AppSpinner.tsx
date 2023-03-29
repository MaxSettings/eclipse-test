import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { Spin } from 'antd';

const b = cn('app-spinner');

export const AppSpinner: FC<Props> = (props) => {
  const { className } = props;

  return <Spin className={classNames(b(), className)} size="large" />;
};
