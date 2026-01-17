import { unlinkSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { faker } from '@faker-js/faker';
import { User } from 'firebase/auth';
import { UserCredential } from '@firebase/auth';
import { UserProfile } from '../src/modules/auth-module/auth-module.types';
import { createUser } from '../src/modules/auth-module/authHelpers';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.basename(fileURLToPath(import.meta.url));
const usersCount = Number(process.argv[2] || '3');

export const VENDOR_USER: Pick<UserProfile, 'email' | 'password'> = {
  email: 'admin-user@test.com',
  password: 'admin1234',
};

export const REGULAR_USER: Pick<UserProfile, 'email' | 'password'> = {
  email: 'regular-user@test.com',
  password: 'user1234',
};

export async function generateUsersMock(usersCountt: number): Promise<User[]> {
  const pendingUsers: Array<Promise<UserCredential>> = [createUser(VENDOR_USER), createUser(REGULAR_USER)];
  for (let i = 0; i < usersCountt - 2; i++) {
    pendingUsers.push(createUser({ email: faker.internet.email(), password: faker.internet.password({ length: 6 }) }));
  }
  return (await Promise.all(pendingUsers)).map((userCredential) => userCredential.user);
}

console.log('DUPA: ', process.argv[2]);

void generateUsersMock(usersCount)
  .then((users) => {
    console.log('USERS CREATED:\n');
    for (const user of users) {
      console.log(`${JSON.stringify(user.toJSON())}\n`);
    }
  })
  .finally(() => unlinkSync(path.join(__dirname, __filename)));
