import { db } from "./firebase-controller.js";
import {
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

//Our functions based on firestore functions

export const saveFormPost = (textAreaPost, likes) => {
    addDoc(collection(db, "posts-collection"), { textAreaPost, likes });
};

export const getPost = () => getDocs(collection(db, "posts-collection"));

export const onGetPost = (callback) => onSnapshot(collection(db, "posts-collection"), (callback));

export const deletePost = (id) => deleteDoc(doc(db, "posts-collection", id));

export const getOnePost = (id) => getDoc(doc(db, "posts-collection", id));

export const updatePost = (id, newChanges) => updateDoc(doc(db, "posts-collection", id), newChanges);