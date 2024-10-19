import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";

// Custom hook for signing in
const useSignIn = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setLoading(true);
    setErrorMsg(null); // Reset error state before a new request

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Set user state
      console.log(userCredential.user);
      return userCredential; // Return userCredential if needed
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(errorMessage); // Capture error message
      console.error(`Error ${errorCode}: ${errorMessage}`);
      return null; // Return null in case of error
    } finally {
      setLoading(false); // Ensure loading is stopped after the operation
    }
  };

  return { signIn, errorMsg, user, loading };
};

export default useSignIn;
