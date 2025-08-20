import {initializeApp } from "firebase/app";
import {getFirestore,doc,setDoc,collection,getDocs,query,deleteDoc} from "firebase/firestore"
import {parsing} from './envparser.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let firestoreDB , app ;

// Configuration & Initialize Firebase
const initializeFirebaseApp = (firebaseConfig) => {
    try {
        app = initializeApp(firebaseConfig);
        firestoreDB = getFirestore(app);
        return app;
    } catch (error) {
        console.log(error, "firebase-initializeFirebaseApp");
        throw error
    };
}
export const configuration = async () =>{
    const keys = await parsing('.env')
    try {
        console.log(keys)
        const firebaseConfig = {
            apiKey: keys.apiKey,
            authDomain: `${keys.fbName}.firebaseapp.com`,
            projectId: keys.fbName,
            storageBucket: `${keys.fbName}.appspot.com`,
            messagingSenderId: keys.messagingSenderId,
            appId: keys.appId
        };
        initializeFirebaseApp(firebaseConfig)
    } catch (error) {
        throw error
    }
}

// Create & Update Document
export const uploadProcessData = async (dataToUpload={},collectionName="defualt",documentId) => {
    try {
        const document = doc(firestoreDB,collectionName,documentId)
        let dataUploaded = await setDoc(document, dataToUpload)
    
    } catch (error) {
        console.log(error,"firebase-uploadProcessedData")
    }
}
// Get Firebase App
export const getFirebaseApp = () => app
// Read the docs of a collection
export const GetData = async (from,to,collectionName) => {
    try {
        const collectionRef = collection(firestoreDB,collectionName)
        const finalData =[]
        const q = query(
            collectionRef
        )
        const docSnap = await getDocs(q)
        if(!from && !to){
            try {
                docSnap.slice(from,to)
            } catch (error) {
                throw error
            }
        }
        docSnap.forEach((doc)=>{
            finalData.push(doc.data())
        })
        return finalData
    } catch (error) {
        throw error
    }
} 
// Delete Doc or Field
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
export const deleteField = async(collectionName)