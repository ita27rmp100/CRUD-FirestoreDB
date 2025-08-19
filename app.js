// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getFirestore,doc,setDoc,collection,getDocs,query,deleteDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let firestoreDB , app ;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqSUwj14EUDJWN1YLrf_NLMnD_4Sdn75c",
  authDomain: "learn-f3db6.firebaseapp.com",
  databaseURL: "https://learn-f3db6-default-rtdb.firebaseio.com",
  projectId: "learn-f3db6",
  storageBucket: "learn-f3db6.firebasestorage.app",
  messagingSenderId: "756639848153",
  appId: "1:756639848153:web:2131bf4e1e489f048290c8"
};

// Initialize Firebase

export const initializeFirebaseApp = () => {
    try {
    app = initializeApp(firebaseConfig);
    firestoreDB = getFirestore( );
    return app;
    } catch (error) {
        console.log(error, "firebase-initializeFirebaseApp");
    };
}
 
export const uploadProcessData = async () => {
    const dataToUpload = {
        name:"Tayeb Abderahim",
        family:"Ismail",
        age:19,
        origin:"Arabe",
        wilaya:"Blida",
    }
    try {
        const document = doc(firestoreDB,"users","44TLMsCmQcWLlMhqhc9H")
        let dataUploaded = await setDoc(document,dataToUpload,)
    
    } catch (error) {
        console.log(error,"firebase-uploadProcessedData")
    }
}
// get
export const getFirebaseApp = () => app
// read
export const GetData = async (from,to) => {
    try {
        const collectionRef = collection(firestoreDB,"users",)
        const finalData =[]
        const q = query(
            collectionRef
        )
        const docSnap = await getDocs(q)

        docSnap.forEach((doc)=>{
            finalData.push(doc.data())
        })
        return finalData
    } catch (error) {
        console.log(error,"Firebase-GetData")
    }
} 
// delete
export const deleteDocument = async (collectionName, documentId) => {
    try {
        if (!firestoreDB) {
            console.error("Firestore DB not initialized. Call initializeFirebaseApp first.");
            return false;
        }
        const docRef = doc(firestoreDB, collectionName, documentId);
        await deleteDoc(docRef);
        console.log(`Document with ID '${documentId}' successfully deleted from collection '${collectionName}'.`);
        return true;
    } catch (error) {
        console.error(`Error deleting document '${documentId}' from collection '${collectionName}':`, error);
        return false;
    }
};