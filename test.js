// testFirestore.js
import { existsSync } from 'fs';
import { configuration, uploadProcessData,GetData,deleteDocument,delField } from './app.js'; // Adjust path if needed

const main = async () => {
    // Initialize the Firebase app
    await configuration();
    // Create & update
    const student = {
        name:"Juan",
        family:"Junior",
        age:17,
        origin:"Latin",
        country:"Spain"
    }
    await uploadProcessData(student,"users","random-ID");
    // Delete 
        // Doc
    console.log("DELETING DATA")
    await deleteDocument("users", "a");
        // Field
    console.log("DELETING FIELD")
    await delField("users","random-ID","country")
    // READ & Display Collection's docs
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

// Run the main function and then exit
main().then(() => process.exit(0)).catch(err => {
    console.error(err);
    process.exit(1);
});
