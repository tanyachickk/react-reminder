import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export const useGroups = userId => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("groups")
      .where("userId", "==", userId)
      .orderBy("created");

    console.log("FIREBASE USE GROUPS");

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const allGroups = snapshot.docs.map(group => ({
        ...group.data(),
        id: group.id
      }));
      setGroups(allGroups);
    });
    return () => unsubscribe();
  }, [userId]);

  return { groups, setGroups };
};
