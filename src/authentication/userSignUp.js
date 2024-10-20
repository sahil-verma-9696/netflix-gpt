import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";


// import { useState } from "react";

// Custom hook for signing up
const userSignUp = (setErrorMsg) => {

    const signUp = async (email, password) => {

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
        } catch (error) {
            setErrorMsg(error.message);
            console.error(`Error: ${error.message}`);
        }

    };

    const googleSignUp = async () => {
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            setErrorMsg(error.message);
        }
    }

    return { signUp, googleSignUp };
};

export default userSignUp;
