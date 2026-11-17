import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJzqvbXtD0m3QE68czbsDSYdAInqdI_dw",
    authDomain: "fir-course-50999.firebaseapp.com",
    projectId: "fir-course-50999",
    storageBucket: "fir-course-50999.firebasestorage.app",
    messagingSenderId: "489036939300",
    appId: "1:489036939300:web:84f3aff2c1ce560b3d58b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export {db};