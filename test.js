// testFirestore.js
import { existsSync } from 'fs';
import { configuration, uploadProcessData,GetData,deleteDocument,delField } from './app.js'; // Adjust path if needed

const main = async () => {
    // Step 1: Initialize the Firebase app
    await configuration();
    // Step 2: Create & update
    const student = {
        name:"Morad",
        family:"Bouznad",
        age:19,
        wilaya:"Skikda",
        origin:"arabe",
        country:"algeria"
    }
    await uploadProcessData(student,"users","ttl19LMsCmQcWLlMhqhcf5");
    // step 5 : Delete 
        // Doc
    console.log("DELETING DATA")
    await deleteDocument("users", "a");
        // Field
    console.log("DELETING FIELD")
    await delField("users","ttl19LMsCmQcWLlMhqhcf5","country")
    // step 4: READ 
    console.log("Data Retrieved")
    const allUsers = await GetData("users")
    if (allUsers && allUsers.length > 0) {
        allUsers.forEach(e => {
            console.log(e)
        })
        console.log("Done")
    } else {
        console.log("No data")
    }
    existsSync()
};

// Run the main function
main();
