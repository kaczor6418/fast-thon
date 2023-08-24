import path from 'path';
import { fileURLToPath } from 'url';
import { unlinkSync } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.basename(fileURLToPath(import.meta.url));
const newFirebaseAppID = process.argv[2];

function resourcePath(...paths: string[]) {
  return path.join(__dirname, ...paths);
}

async function replaceAppIDInFirebaserc() {
  const firebasercPath = resourcePath('firebase', '.firebaserc');
  const originalFileContent = await readFile(firebasercPath, { encoding: 'utf-8' });
  const oldNamePattern = /("default"\s*:\s*")([^"]+)(")/g;
  const replacedFileContent = originalFileContent.replace(oldNamePattern, `$1${newFirebaseAppID}$3`);
  await writeFile(firebasercPath, replacedFileContent);
}

async function replaceAppIDInGitHubWorkflowFile(filePath: string) {
  const originalFileContent = await readFile(filePath, { encoding: 'utf-8' });
  const oldNamePattern = /projectId:\s*(\S+)/;
  const replacedFileContent = originalFileContent.replace(oldNamePattern, `projectId: ${newFirebaseAppID}`);
  await writeFile(filePath, replacedFileContent);
}

Promise.all([
  replaceAppIDInFirebaserc(),
  replaceAppIDInGitHubWorkflowFile(resourcePath('.github', 'workflows', 'deploy-preview-on-pull-request.yml')),
  replaceAppIDInGitHubWorkflowFile(resourcePath('.github', 'workflows', 'build-and-deploy.yml')),
])
  .then(() => {
    console.info('\x1b[32m', `🔗 Project [${newFirebaseAppID}] get linked with Firebase`);
  })
  .catch((error: Error) => {
    console.error('\x1b[31m', `Couldn't replace ProjectID to ${newFirebaseAppID} because of following error:\n`, error);
  })
  .finally(() => {
    unlinkSync(resourcePath(__filename));
  });
