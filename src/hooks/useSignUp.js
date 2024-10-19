import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../utils/firebase";

// import { useState } from "react";

// Custom hook for signing up
const useSignUp = (setErrorMsg) => {

    const signUp = async (email, password) => {

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
        } catch (error) {
            setErrorMsg(error.message);
            console.error(`Error: ${error.message}`);
        }

    };

    return { signUp };
};

export default useSignUp;
