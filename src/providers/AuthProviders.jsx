import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// email password login
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUserWithEmail = (email, password, displayName, photoURL) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        return updateProfile(userCredential.user, {
          displayName,
          photoURL,
        }).then(() => {
          return userCredential;
        });
      }
    );
  };

  //   email password login
  const emailLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //   github login
  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  //
  const logut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in auth", currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

 
  const authInfo = {
    googleLogin,
    githubLogin,
    createUserWithEmail,
    emailLogin,
    logut,
    user,
    loading,
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
