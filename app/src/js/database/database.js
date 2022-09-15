import { Server } from "../utils/config.js";

const client = new Appwrite.Client();
     client
         .setEndpoint(Server.endpoint) // Your API Endpoint
         .setProject(Server.project) // Your project ID
     ;
     const account = new Appwrite.Account(client);
     const database = new Appwrite.Databases(client, Server.databaseID);
let api = {
    
    createAccount: (email, password, name) => {
      return account.create('unique()', email, password, name);
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
      return database.createDocument(collectionId, 'unique()', data, read, write);
    },
  
    listDocuments: (collectionId) => {
      return database.listDocuments(collectionId);
    },
  
    updateDocument: (collectionId, documentId, data, read, write) => {
      return database.updateDocument(collectionId, documentId, data, read, write);
    },
  
    deleteDocument: (collectionId, documentId) => {
      return database.deleteDocument(collectionId, documentId);
    },
  };
  
  export default api;