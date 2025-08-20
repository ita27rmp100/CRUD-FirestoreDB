// testFirestore.js
import { configuration, uploadProcessData,GetData,deleteDocument } from './app.js'; // Adjust path if needed

const main = async () => {
    // Step 1: Initialize the Firebase app
    await configuration();

    // Step 2: Upload the data to Firestore
    await uploadProcessData();
    // step 3: retrieve
    console.log("Retrieving data from firestore")
    const allUsers = await GetData()
    // step 5 : delete
    console.log("DELETING DATA")
    await deleteDocument("users", "W3uah9oYRpBSiE1st1Pr");
    // step 4: l'affichage du data
    console.log("Data Retrieved")
    if (allUsers && allUsers.length > 0) {
        allUsers.forEach(e => {
            console.log(e)
        })
        console.log("Done")
    } else {
        console.log("No data")
    }
};

// Run the main function
main();
