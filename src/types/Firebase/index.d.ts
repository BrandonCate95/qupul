import { FirebaseType } from '../../services/Firebase'

export interface WithFirebase {
    firebase: FirebaseType
}

export interface FirestoreGenericObject {
    uid: string,
    [key: string]: any
}
  
export type FirestoreWhereTuple = [string | app.firestore.FieldPath, app.firestore.WhereFilterOp, any]
  
export type FirestoreOrderByTuple = [string | app.firestore.FieldPath, app.firestore.OrderByDirection]