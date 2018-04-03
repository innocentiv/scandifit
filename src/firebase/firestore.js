import { firestore } from "./firebase";

export const doSaveUserWeight = (weight, uid) => firestore.collection("weightdata").add({
  weight,
  uid,
  time: new Date()
})

export const doUndoLastUserWeight = (uid) => {}

