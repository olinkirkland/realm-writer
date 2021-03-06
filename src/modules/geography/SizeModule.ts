import Module from '../Module';
import Realm from '../../realm/Realm';
import Rand from '../../util/Rand';

export enum Size {
  VERY_SMALL = 'very small',
  SMALL = 'small',
  MEDIUM = 'medium-sized',
  LARGE = 'large',
  VERY_LARGE = 'very large'
}

export default class SizeModule extends Module {
  public size!: Size;

  constructor(realm: Realm) {
    super(realm);
  }

  protected run() {
    this.size = Rand.pick(Object.values(Size));
    this.realm.addTag(this.size == Size.VERY_SMALL ? 'city' : 'region');
  }

  get sizeIndex() {
    return Object.values(Size).indexOf(this.size);
  }

  static getSizeFromIndex(i: number): Size {
    return Object.values(Size)[i];
  }
}
