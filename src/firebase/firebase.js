import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("notes").push({
//     title: "To Do",
//     body: "Go for a run"
// });

// const notes = [{
//     id: 12,
//     title: "first Note!",
//     body: "This is my note"
// }, {
//     id: "12wer1",
//     title: "My seconds note!",
//     body: ""
// }];
//
// database.ref("notes").set(notes);

// database.ref().on("value", snapshot => {
//     console.log(snapshot.val())
// });
//
// database.ref().set({
//     name: "Test User",
//     age: 31,
//     location: {
//         city: "Philadelphia",
//         country: "United States"
//     }
// });
//
// database
//     .ref("location")
//     .once("value")
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e => console.log("Error!", e));