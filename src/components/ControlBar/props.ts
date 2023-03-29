import { ChangeEventHandler } from 'react';

export type Props = {
  className?: string;
  searchValue: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  activeTypes: string[];
  setActiveTypes: (
    value: ((prevState: string[]) => string[]) | string[]
  ) => void;
};
