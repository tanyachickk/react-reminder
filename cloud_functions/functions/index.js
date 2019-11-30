const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.deleteRelatedTasks = functions.firestore
  .document("groups/{groupId}")
  .onDelete((change, context) => {
    const groupId = context.params.groupId;
    console.log("DELETE", groupId);
    db.collection("tasks")
      .where("groupId", "==", groupId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          console.log(`Found document at ${documentSnapshot.id}`);
          db.collection("tasks")
            .doc(documentSnapshot.id)
            .delete();
        });
        return new Promise(res => res(querySnapshot));
      })
      .catch(error => {
        throw new Error(error);
      });
  });
