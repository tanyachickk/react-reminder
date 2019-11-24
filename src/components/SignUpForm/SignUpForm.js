import React, { useState } from "react";
import { firebase } from "../../firebase";
import "firebase/auth";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUp = e => {
    e.preventDefault();
    console.log("signUp");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
          const currentUser = firebase.auth().currentUser;
          debugger;
          currentUser
            .updateProfile({
              displayName: name
            })
            .then(resp => {
              console.log("success!!!", user, resp);
            });
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={e => signUp(e)}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};
