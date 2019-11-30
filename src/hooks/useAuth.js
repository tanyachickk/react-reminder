import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export const useAuth = () => {
  const [user, setUser] = useState(firebase.auth().currentUser);
  const [isInitialized, setIsInitialized] = useState(false);

  const signIn = ({ email, password }) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const signUp = ({ name, email, password }) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
          const currentUser = firebase.auth().currentUser;
          currentUser
            .updateProfile({
              displayName: name
            })
            .then(resp => {
              console.log("success!!!", user, resp);
            });
        }
      });

  const signOut = () => firebase.auth().signOut();

  useEffect(() => {
    console.log("FIREBASE AUTH");
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
