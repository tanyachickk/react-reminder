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
      .then(userData => {
        if (userData) {
          userData.user.updateProfile({ displayName: name }).then(() => {
            setUser({ ...userData.user, uid: userData.user.uid });
          });
        }
      });

  const signOut = () => firebase.auth().signOut();

  const updateUsername = displayName => {
    firebase
      .auth()
      .currentUser.updateProfile({ displayName })
      .then(() => {
        const currentUser = firebase.auth().currentUser;
        setUser({ ...currentUser, uid: currentUser.uid });
      });
  };

  useEffect(() => {
    console.log("FIREBASE AUTH");
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({ ...user, uid: user.uid });
      } else {
        setUser(user);
      }
      setIsInitialized(true);
    });
    return () => unsubscribe();
  }, []);

  return { user, isInitialized, signIn, signUp, signOut, updateUsername };
};
