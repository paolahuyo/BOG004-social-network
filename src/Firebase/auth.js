import { createUser } from "./controller-firebase.js";
import { goLoginUser } from "./controller-firebase.js";
import { loginGoogle } from "./controller-firebase.js";

//Our functions based on firebase functions
export const registerUser = (email, password) => {
    return createUser(email, password);
};

export const loginUser = (email, password) => {
    return goLoginUser(email, password);
};

export const googleUser = () =>{
    return loginGoogle();
};


