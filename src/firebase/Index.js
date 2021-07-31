import firebase from "firebase/app";
import "@firebase/firestore"
import "@firebase/auth"
import getEnvVars from "../../environment"

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = getEnvVars();

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };