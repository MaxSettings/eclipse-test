import { TypesList } from 'src/types/TypesList';

export function getTagColorByType(type: string): string {
  switch (type) {
    case TypesList.NORMAl:
      return '#4E5754';
    case TypesList.FIGHTING:
      return '#d80000';
    case TypesList.FLYING:
      return '#AC66D5';
    case TypesList.POISON:
      return '#679B00';
    case TypesList.GROUND:
      return '#57471e';
    case TypesList.ROCK:
      return '#909090';
    case TypesList.BUG:
      return 'rgb(244, 223, 91)';
    case TypesList.GHOST:
      return '#566773';
    case TypesList.STEEL:
      return '#4682b4';
    case TypesList.FIRE:
      return '#ff7b00';
    case TypesList.WATER:
      return 'rgb(130, 151, 206)';
    case TypesList.GRASS:
      return '#278e2a';
    case TypesList.ELECTRIC:
      return '#2C75FF';
    case TypesList.PHYSIC:
      return '#625981';
    case TypesList.ICE:
      return '#6e9abc';
    case TypesList.DRAGON:
      return '#126180';
    case TypesList.DARK:
      return 'dark';
    case TypesList.FAIRY:
      return '#db8b97';
    case TypesList.UNKNOWN:
      return 'black';
    case TypesList.SHADOW:
      return '#696969';
    default:
      return '#878787';
  }
}
