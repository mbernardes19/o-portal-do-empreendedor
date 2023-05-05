import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite';


const app = initializeApp({
    apiKey: "AIzaSyBnEfKZ4164b4oiL_ZZHbDjYg78vHwCdhg",
    authDomain: "portal-do-empreendedor.firebaseapp.com",
    projectId: "portal-do-empreendedor",
    storageBucket: "portal-do-empreendedor.appspot.com",
    messagingSenderId: "65775713536",
    appId: "1:65775713536:web:e924e11afb53eeb3f547e5"
})

export const db = getFirestore(app)