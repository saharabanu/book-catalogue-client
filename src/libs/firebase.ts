/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyC24Kj7uvYmsMrqd-DJzEwYoM-oLfVhdVk",
  authDomain: "book-catalogue-56873.firebaseapp.com",
  projectId: "book-catalogue-56873",
  storageBucket: "book-catalogue-56873.appspot.com",
  messagingSenderId: "1059725066836",
  appId: "1:1059725066836:web:9f11bddce2a5a7cb1223c1"
};
//console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
