import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signUpWithPassword = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateName(name);
        console.log(res.user);
        const newUser = {
          ...res.user,
          displayName: name,
        };
        setUser(newUser);
        saveUserToDB(res.user.email, name);
        history.push('/');
        console.log(newUser);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // login with email and password
  const signInWithPassword = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        console.log(res.user);
        setUser(res.user);
        setError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // sign in with google
  const signInWithGoogle = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // logout
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, function (user) {
      if (user) {
        // User is signed in.
        setLoading(true);
        setUser(user);
      } else {
        // No user is signed in.
        setUser({});
      }
      setLoading(false);
    });
    return () => {
      observer();
    };
  }, []);

  // save user in database
  const saveUserToDB = (email, displayName) => {
    const user = { email, displayName };
    console.log(user);

    fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  return {
    signUpWithPassword,
    user,
    loading,
    error,
    signInWithPassword,
    logOut,
    signInWithGoogle,
  };
};

export default useFirebase;
