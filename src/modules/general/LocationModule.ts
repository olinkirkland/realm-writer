import Realm from '../../realm/Realm';
import Rand from '../../util/Rand';
import { BiomeType } from '../geography/BiomesModule';
import Module from '../Module';

export enum Direction {
  NORTH = 'north',
  NORTH_EAST = 'north-east',
  EAST = 'east',
  SOUTH_EAST = 'south-east',
  SOUTH = 'south',
  SOUTH_WEST = 'south-west',
  WEST = 'west',
  NORTH_WEST = 'north-west'
}

export default class LocationModule extends Module {
  public locationWithinParentEntity!: Direction;
  public directionToCoast!: Direction | null;

  constructor(realm: Realm) {
    super(realm);
  }

  protected run() {
    this.locationWithinParentEntity = Rand.pick(Object.values(Direction));

    // Add direction tags south-west => south, west
    this.locationWithinParentEntity
      .split('-')
      .forEach((l) => this.realm.addTag(l));

    // 40% chance to be coastal
    if (Rand.next() < 0.4) {
      this.directionToCoast = this.locationWithinParentEntity;
      this.realm.addTag(BiomeType.COAST);
    }
  }

  static isCardinalDirection(direction: Direction) {
    return !direction.includes('-');
  }
}
