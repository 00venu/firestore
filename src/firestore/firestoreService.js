import firebase from "../config/firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();
  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }
  return {
    ...data,
    id: snapshot.id,
  };
}

export function getDataFromFirestore() {
  //return db.collection("data").onSnapshot(observer);
  return db.collection("data");
}

export function getDocFromFirestore(docId) {
  return db.collection("data").doc(docId);
}

export function addDocToFirestore(newData) {
  return db.collection("data").add({
    ...newData,
    date: firebase.firestore.Timestamp.fromDate(newData.date),
  });
}

export function updateDocToFirestore(newData) {
  return db
    .collection("data")
    .doc(newData.id)
    .update({
      ...newData,
      date: new Date(newData.date),
    });
}

export function deleteDocFromFirestore(docId) {
  return db.collection("data").doc(docId).delete();
}
