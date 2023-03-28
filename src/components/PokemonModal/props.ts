import { PokemonType } from 'src/types/PokemonType';

export type Props = {
  className?: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  pokemon: PokemonType;
};
