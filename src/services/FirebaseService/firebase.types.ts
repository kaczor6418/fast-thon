export const enum FirestoreCollection {
  Users = 'users',
  Items = 'items',
}

export interface FirestoreCollections {
  [FirestoreCollection.Users]: {
    firstName: string;
    lastName: string;
    age: number;
  };
  [FirestoreCollection.Items]: {
    name: string;
    price: number;
    details: {
      unit: string;
      type: string;
    };
  };
}
