/* const firebaseConfig = {
  apiKey: 'AIzaSyBXiKd6h_2_MWY_ZrxNiu13QSy6Kqnesek',
  authDomain: 'runner-cycle.firebaseapp.com',
  projectId: 'runner-cycle',
  storageBucket: 'runner-cycle.appspot.com',
  messagingSenderId: '862058682372',
  appId: '1:862058682372:web:e3a8e2dbce3aec0eaefd51',
};

export default firebaseConfig; */

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;
