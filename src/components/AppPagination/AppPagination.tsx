import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { Pagination } from 'antd';

const b = cn('app-pagination');

export const AppPagination: FC<Props> = (props) => {
  const {
    className,
    currentPage,
    onPageChange,
    onPageSizeChange,
    total,
    currentPageSize,
  } = props;

  return (
    <Pagination
      rootClassName={classNames(b(), className)}
      defaultCurrent={1}
      current={currentPage}
      pageSize={currentPageSize}
      pageSizeOptions={[10, 20, 50]}
      total={total}
      onShowSizeChange={onPageSizeChange}
      onChange={onPageChange}
      showSizeChanger
      hideOnSinglePage
    />
  );
};
