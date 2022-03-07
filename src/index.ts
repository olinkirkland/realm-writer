/**
 * Hint: Use 'npm run build' from console to compile + watch the TS code on save
 */

import RealmPageController from './controllers/RealmPageController';
import JSONPageController from './controllers/JSONPageController';
import PageController from './controllers/PageController';

// Determine the html file name
const arr: RegExpMatchArray | null = window.location.href.match(
  /(?<=.*)(\w+)\.html(?=.*)/
);

const file = arr && arr.length > 1 ? arr[1] : '';

let controller: PageController;
switch (file) {
  case 'realm':
    controller = new RealmPageController();
    break;
  case 'json':
    controller = new JSONPageController();
    break;
  default:
    // Error!
    console.log('Error!');
    break;
}
