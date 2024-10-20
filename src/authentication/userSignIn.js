import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";


// Custom hook for signing in
const userSignIn = (setErrorMsg) => {

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(`Error ${errorCode}: ${errorMessage}`);
    }
  };
  const googleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(`Error ${errorCode}: ${errorMessage}`);
    }
  };

  return { signIn, googleSignIn };
};

export default userSignIn;
