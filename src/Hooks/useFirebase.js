import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { useState } from 'react';

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  const signUpWithPassword = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateName(name);
        console.log(res.user);
        setUser(res.user);
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
  return { signUpWithPassword, user, loading, error };
};

export default useFirebase;
