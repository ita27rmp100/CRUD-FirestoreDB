import {initializeApp } from "firebase/app";
import {getFirestore,doc,setDoc,collection,getDocs,query,deleteDoc} from "firebase/firestore"
import {parsing} from './envparser.js'

let keys;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let firestoreDB , app ;

// Initialize Firebase

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
 
async function configuration(){
    const keys = await parsing('.env')
    console.log("Parsed keys :",keys)
    try {
        const firebaseConfig = {
            apiKey:`${keys.apiKey}`,
            authDomain:`${keys.fbName}.firebaseapp.com`,
            databaseURL:`https://${keys.fbURL}.firebaseio.com`,
            projectId:`${keys.fbName}`,
            storageBucket:`${keys.fbName}.firebasestorage.app`,
            messagingSenderId:`${keys.messagingSenderId}`,
            appId:`${keys.appId}`
        };
        initializeFirebaseApp(firebaseConfig)
    } catch (error) {
        throw error
    }
}

configuration()

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