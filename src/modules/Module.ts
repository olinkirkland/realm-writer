import Realm from '../realm/Realm';

export default class Module {
  protected realm: Realm;

  constructor(realm: Realm) {
    this.realm = realm;
    this.run();
  }

  protected run() {}
}

// Module child class template

// import Module from '../Module';
// import Realm from '../../realm/Realm';

// export default class xModule extends Module {
//   constructor(realm: Realm) {
//     super(realm);
//   }

//   protected run() {

//   }
// }
