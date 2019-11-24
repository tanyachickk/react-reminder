import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export const useAuth = () => {
  const [user, setUser] = useState(firebase.auth().currentUser);
  const [isInitialized, setIsInitialized] = useState(false);

  const signIn = ({ email, password }) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const signUp = ({ email, password }) =>
    firebase.auth().signUpWithEmailAndPassword(email, password);

  const signOut = () => firebase.auth().signOut();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setIsInitialized(true);
    });
    return () => unsubscribe();
  }, []);

  return [
    { user, isInitialized },
    { signIn, signUp, signOut }
  ];
};
