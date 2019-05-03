import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
require("dotenv").config();

//Reducers {TODO}

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   databaseURL: process.env.databaseURL,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAo_ljLsaDpLaUqEP0en3DhhBd8JKsMZaQ",
  authDomain: "clientpanel-6cc96.firebaseapp.com",
  databaseURL: "https://clientpanel-6cc96.firebaseio.com",
  projectId: "clientpanel-6cc96",
  storageBucket: "clientpanel-6cc96.appspot.com",
  messagingSenderId: "282036309318",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestoe
firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase), // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {}; // TODO: Fetch settings from local storage and put them here
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
