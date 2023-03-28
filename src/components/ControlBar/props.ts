import { ChangeEventHandler } from 'react';
import { RadioChangeEvent } from 'antd';

export type Props = {
  className?: string;
  searchValue: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  countPerPage: number;
  onCountPerPageChange: (e: RadioChangeEvent) => void;
  activeTypes: string[];
  setActiveTypes: (
    value: ((prevState: string[]) => string[]) | string[]
  ) => void;
};
