import React, { useState } from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";

const Popup = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); // Store user info in state
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        height: "200px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Login with Google</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {user && (
        <div style={{ marginTop: "20px" }}>
          <h3>Welcome, {user.displayName}!</h3>
          <p>Email: {user.email}</p>
          <img
            src={user.photoURL}
            alt="Profile"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Popup;
