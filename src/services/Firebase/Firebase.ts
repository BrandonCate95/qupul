import app from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

import firebaseConfig from '../../config/firebase.config'
import * as DATABASE from '../../constants/database'
import { FirestoreGenericObject, FirestoreWhereTuple, FirestoreOrderByTuple } from '../../types/Firebase/index.js'

export class Firebase {

  auth: app.auth.Auth
  db: app.firestore.Firestore

  constructor() {
    app.initializeApp(firebaseConfig)
    app.analytics();

    this.auth = app.auth()
    this.db = app.firestore()
  }

  // ***************************************************************
  //                    START AUTHENTICATION
  // ***************************************************************
  doCreateUserWithEmailAndPassword = (username: string, email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password)
    .then((authUser: app.auth.UserCredential) => // Create a user in firestore to allow for additional configuration
      {
        if(authUser.user) return this.setDoc(DATABASE.USERS, 
          {
            uid: authUser.user.uid,
            username,
            email
          })
      }
    ).catch(console.log)

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = (password: string) =>
    this.auth.currentUser ? this.auth.currentUser.updatePassword(password) : null
  // ***************************************************************
  //                    END AUTHENTICATION
  // ***************************************************************



  // ***************************************************************
  //                     START FIRESTORE
  // ***************************************************************

  collection = (collectionName: string) => this.db.collection(collectionName)

  getDocs = <T extends FirestoreGenericObject>(collectionName: string, options?: { limit?: number, where?: FirestoreWhereTuple[], orderBy?: FirestoreOrderByTuple }): Promise<T[]> => { 
    return new Promise((resolve, reject) => {

      // START -- construct collection reference
      var collectionRef = this.db.collection(collectionName)

      if(options){
        if(options.limit) collectionRef.limit(options.limit)

        if(options.where){
          options.where.forEach((tuple: FirestoreWhereTuple) => collectionRef.where(tuple[0], tuple[1], tuple[2]))
        }
  
        if(options.orderBy) collectionRef.orderBy(options.orderBy[0], options.orderBy[1])
      }      
      // END -- construct collection reference

      collectionRef.get()
        .then(snapshot => {

          var objects: T[] = []

          snapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            const object = {
              uid: doc.id,
              ...doc.data()
            } as T // if object cannot be cast error will be thrown
      
            objects.push(object)
          })

          resolve(objects)

        })
        .catch(reject)

    })
  }

  doc = (collectionName: string, uid: string) => this.collection(collectionName).doc(uid)

  getDocById = (collectionName: string, uid: string) => {
    return new Promise((resolve, reject) => {

      this.doc(collectionName, uid).get()
        .then(doc => {
          if(doc.exists) resolve(doc)
          else reject(`No Document with uid: ${uid}`)
        })
        .catch(reject)

    })    
  }

  /**
   * creates or updates a document in firestore
   * if uid already exists it will update
   * if uid does not exits it will create
   */
  setDoc = (collectionName: string, data: { uid?: string, [key: string]: any }) => {
    return new Promise((resolve, reject) => {

      if(!data.uid) {

        this.collection(collectionName).add(data)
          .then((docRef) => resolve(docRef))
          .catch(reject)

      }
      else {
  
        this.collection(collectionName).doc(data.uid).set(data)
          .then(() => resolve(true))
          .catch(() => reject(false))
  
      }

    })
  }

}

export default Firebase