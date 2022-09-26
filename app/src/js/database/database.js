import { Server } from "../utils/config.js";
import { userID } from "../index.js";

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

  createEntry: (data) => {
    return database.createDocument(Server.entriesCol, 'unique()', data)
  },

  createUserDocument: (userId, data, read, write) => {
    return database.createDocument(Server.userCol, userId, data, read,
      write)
  },

   myDocument2: () => {
    return database.listDocuments(
      Server.databaseID,
      Server.userCol,
      [
        Appwrite.Query.equal("CompletedChallenges", "6329cee38b04af2b4290")
      ]
    );
  }, 
  myDocument: (myID) => {
    console.log(userID);
    return database.getDocument(
      Server.userCol,
      myID
    );
  },
 
 
  listDocuments: (collectionId) => {
    return database.listDocuments(collectionId);
  },
  getUserListDocuments: () => {
    return database.listDocuments(Server.userCol);
  },
  
  getEntryDocuments: () => {
    return database.listDocuments(Server.entriesCol);
  },
  deleteEntryDocument: (id) => {
    return database.deleteDocument(Server.entriesCol, id);
  },
  getChallengeDocuments: () => {
    return database.listDocuments(Server.challengesCol);
  },
  updateChallenges: (active, completed) => {
    return database.updateDocument(Server.userCol, userID,{CompletedChallenges: completed, ActiveChallenges: active});
  },

  updateDocument: (collectionId, documentId, data, read, write) => {
    return database.updateDocument(collectionId, documentId, data, read,
      write);
  },
  updateUserCl: (documentId, data, read, write) => {
    return database.updateDocument(Server.userCol, documentId, data, read,
      write);
  },
  updateUserLastLogin: (documentId, data, read, write) => {
    return database.updateDocument(Server.userCol, documentId, data, read,
      write);
  },

  deleteDocument: (collectionId, documentId) => {
    return database.deleteDocument(collectionId, documentId);
  },
};

export default api;