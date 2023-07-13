import {
  CollectionReference,
  DocumentData,
  Firestore,
  QueryFieldFilterConstraint,
  WhereFilterOp,
} from '@firebase/firestore';
import { DocumentReference } from 'firebase/firestore';
import { ObjectFieldPaths } from '../src/common/types';
import { FirestoreCollection, FirestoreCollections } from '../src/services/FirebaseService/firebase.types';

type FirestoreRecord = Record<PropertyKey, unknown>;

type WhereReturnType<T extends FirestoreRecord, V extends string> = V extends keyof T ? T[V] : unknown;

declare module 'firebase/firestore' {
  export declare function collection<T extends FirestoreCollection>(
    firestore: Firestore,
    path: T,
    ...pathSegments: Partial<[string, AvailableSubCollections<infer T>]>
  ): CollectionReference<FirestoreCollections[T]>;
  export declare function doc<T extends Collection, V extends AvailableSubCollections<infer T> = unknown>(
    firestore: Firestore,
    path: T,
    ...pathSegments: string[]
  ): DocumentReference<FireStoreCollectionReturnType<T, V>>;
  export declare function doc<T extends Collection, V extends AvailableSubCollections<infer T> = unknown>(
    reference: DocumentReference<FireStoreCollectionReturnType<T>>,
    path: V,
    ...pathSegments: string[]
  ): DocumentReference<FireStoreSubCollectionReturnType<V>>;

  export declare function where<T extends FirestoreRecord>(
    fieldPath: ObjectFieldPaths<T>,
    opStr: WhereFilterOp,
    value: WhereReturnType<T, typeof fieldPath>
  ): QueryFieldFilterConstraint;
}
