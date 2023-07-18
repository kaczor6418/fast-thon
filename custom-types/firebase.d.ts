import { CollectionReference, Firestore, QueryFieldFilterConstraint, WhereFilterOp } from '@firebase/firestore';
import { DocumentReference } from 'firebase/firestore';
import { ObjectFieldPaths } from '../src/common/types';
import {
  FirestoreCollection,
  FirestoreCollections,
  FirestoreCollectionType,
} from '../src/modules/firebase-module/firebase-module.types';

type FirestorePossibleCollectionType = {
  [K in keyof FirestoreCollectionType]: FirestoreCollectionType[K];
}[keyof FirestoreCollectionType];

type WhereReturnType<T extends FirestorePossibleCollectionType, V extends string> = V extends keyof T ? T[V] : unknown;

declare module 'firebase/firestore' {
  export declare function collection<T extends FirestoreCollection>(
    firestore: Firestore,
    path: T,
    ...pathSegments: string[]
  ): CollectionReference<FirestoreCollections[T]>;

  export declare function doc<T extends FirestoreCollection>(
    firestore: Firestore | DocumentReference | CollectionReference,
    path: T,
    ...pathSegments: string[]
  ): DocumentReference<FirestoreCollectionType[T]>;

  export declare function where<T extends FirestorePossibleCollectionType>(
    fieldPath: ObjectFieldPaths<T>,
    opStr: WhereFilterOp,
    value: WhereReturnType<T, typeof fieldPath>
  ): QueryFieldFilterConstraint;
}
