import React, { useState } from "react";
import { firebase } from "../../firebase";
import "firebase/auth";

export const SignInForm = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");

  const signIn = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log("success", data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={e => signIn(e)}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign in</button>
      </form>
    </div>
  );
};
