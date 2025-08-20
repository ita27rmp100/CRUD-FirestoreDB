# CRUD-FirestoreDB

A simple **Node.js project** that demonstrates **CRUD (Create, Read, Update, Delete)** operations with **Google Firestore Database**.  
It includes custom environment parsing, Firebase initialization, and Firestore functions, along with a `test.js` file to validate functionality.

---

## 📂 Project Structure

```
CRUD-FirestoreDB/
│── app.js            # Firestore CRUD functions (create, read, update, delete)
│── test.js           # Testing script for CRUD operations
│── envparser.js      # Custom .env file parser
│── .env              # Environment variables (Firebase config, etc.)
│── package.json      # Project dependencies & scripts
│── .gitignore
│── README.md
```

---

## 🚀 Features

- **Initialize Firebase** connection using custom `.env` parser.  
- **Create & Update** Firestore documents.  
- **Read** all documents from a collection.  
- **Delete** documents by ID.  
- **Delete fields** inside a document.  
- Includes a **test script** (`test.js`) to demonstrate usage.  

---

## 🔧 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ita27rmp100/CRUD-FirestoreDB.git
   cd CRUD-FirestoreDB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a **`.env`** file in the root directory with your Firebase credentials:
   ```env
   apiKey=your_api_key
   fbName=your_auth_domain
   fbURL=your_project_id
   messagingSenderId=your_storage_bucket
   appId=your_app_id
   ```

---

## ▶️ Usage

Run the test file to execute CRUD operations:

```bash
node test.js
```

Example flow in `test.js`:
1. **Initialize Firebase App**  
2. **Create / Update a Document**  
3. **Delete a Document**  
4. **Delete a Field**  
5. **Retrieve All Documents**  

---

## 📌 Example Output

```
DELETING DATA
DELETING FIELD
Data Retrieved
[
  { id: 'user1', name: 'Alice', age: 21 },
  { id: 'user2', name: 'Bob', age: 25 }
]
```

---

## 🛠️ Tech Stack

- **Node.js** (JavaScript runtime)  
- **Firebase Firestore** (NoSQL database)  
- **Custom .env parser** (instead of dotenv)  

---

## 🧪 Testing

You can modify `test.js` to try:  
- Creating new documents.  
- Updating an existing document.  
- Deleting documents by ID.  
- Deleting specific fields inside a document.  
- Reading all documents from a collection.  

---

## 📄 License

This project is licensed under the MIT License.