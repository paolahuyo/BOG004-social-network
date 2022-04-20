import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from '../Firebase/firebase-import.js';

export const createUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
};

export const logIn = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
};