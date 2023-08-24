import path from 'path';
import { fileURLToPath } from 'url';
import { unlinkSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.basename(fileURLToPath(import.meta.url));

const FILES_WITH_APP_ID = [
  '/firebase/.firebaserc',
  '/.github/workflows/deploy-preview-on-pull-request.yml',
  './github/workflows/build-and-deploy.yml',
];
const firebaseAppID = process.argv[2];
console.log('!!!!!!!!!!!!!!!!!!');
console.log(__filename);
console.log(firebaseAppID);
unlinkSync(path.join(__dirname, __filename));
