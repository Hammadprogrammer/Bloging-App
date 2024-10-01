import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAizQZeJe4czylbR8CXCH2aalDGvpRvJ9Q",
  authDomain: "bloging-app-ba99e.firebaseapp.com",
  projectId: "bloging-app-ba99e",
  storageBucket: "bloging-app-ba99e.appspot.com",
  messagingSenderId: "1080753195493",
  appId: "1:1080753195493:web:9c10628a54fe1eb177c70c",
  measurementId: "G-FCS5H35L7M"
};


const app = initializeApp(firebaseConfig);
export default app