import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAA-wNUFWmAMoZf0KHOSof2wauqtnoF33o",
    authDomain: "humzabaan-a1075.firebaseapp.com",
    projectId: "humzabaan-a1075",
    storageBucket: "humzabaan-a1075.appspot.com",
    messagingSenderId: "994629544043",
    appId: "1:994629544043:web:414641e8b0cd6c444e292e",
    measurementId: "G-N2D9Q349WQ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };