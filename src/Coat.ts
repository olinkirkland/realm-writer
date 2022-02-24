import { Ordinary, Tincture } from './Data';
import Util from './Util';

export default class Coat {
  public ordinary: Ordinary;
  public tinctures: Tincture[];
  public charge: string | null;
  // public chargeArrangement: string;

  constructor(ordinary: Ordinary, tinctures: Tincture[]) {
    this.ordinary = ordinary;
    this.tinctures = tinctures;

    this.charge = Util.rand() < 0.2 ? 'horse' : null;
  }
}