export type PokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
};
