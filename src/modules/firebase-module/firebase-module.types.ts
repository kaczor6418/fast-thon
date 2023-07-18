export const enum FirestoreCollection {
  Users = 'users',
  Items = 'items',
}

export interface User {
  name: string;
  age: number;
}

export interface Item {
  name: string;
  type: string;
}

export type FirestoreCollectionType = {
  [FirestoreCollection.Users]: User;
  [FirestoreCollection.Items]: Item;
};
