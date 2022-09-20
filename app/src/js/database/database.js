import { Server } from "../utils/config.js";

const client = new Appwrite.Client();
client
  .setEndpoint(Server.endpoint) // Your API Endpoint
  .setProject(Server.project) // Your project ID
;
//const query = new Appwrite.Query(client);
const account = new Appwrite.Account(client);
const database = new Appwrite.Databases(client, Server.databaseID);
var userData = null;
let api = {


  createAccount: (email, password, name) => {
    return account.create('unique()', email, password, name);
  },

  getUserData: () => {
    return userData;
  },

  getAccount: () => {
    return account.get();
  },

  createSession: (email, password) => {
    return account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return account.deleteSession('current');
  },

  createDocument: (collectionId, data, read, write) => {
    return database.createDocument(collectionId, 'unique()', data, read,
      write)
  },

  createEntry: (data, read, write) => {
    return database.createDocument(Server.entriesCol, 'unique()', data,
      read, write)
  },

  createUserDocument: (userId, data, read, write) => {
    return database.createDocument(Server.userCol, userId, data, read,
      write)
  },

  myDocument2: (myID) => {
    return database.listDocuments(
      Server.databaseID,
      Server.userCol,
      [
        Appwrite.Query.equal("email", "john@b.com")
      ]
    );
  },
  myDocument: (myID) => {
    return database.getDocument(
      //Server.databaseID,
      Server.userCol,
      myID
    );
  },
  myDocument1: (myID) => {
    return database.listDocuments(Server.userCol);
  },
  
 
  listDocuments: (collectionId) => {
    return database.listDocuments(collectionId);
  },

  updateDocument: (collectionId, documentId, data, read, write) => {
    return database.updateDocument(collectionId, documentId, data, read,
      write);
  },
  updateUserCl: (documentId, data, read, write) => {
    return database.updateDocument(Server.userCol, documentId, data, read,
      write);
  },

  deleteDocument: (collectionId, documentId) => {
    return database.deleteDocument(collectionId, documentId);
  },
};

export default api;