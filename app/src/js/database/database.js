//import { Client, Databases, Databases, Query } from "appwrite";

/*
//Create new document
const client = new Client();

client
    .setEndpoint('https://appwrite.software-engineering.education/v1')
    .setProject('62ed22f3b5f7f7c609a8');

const databases = new Databases(client, '6311ece9c6ebefc4b0f0');

const promise = databases.createDocument('[COLLECTION_ID]', 'unique()', {});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

//find entry
databases.listDocuments('movies', [
    Query.equal('title', 'Avatar')
]);

databases.listDocuments('movies', [
    Query.equal('title', ['Avatar', 'Lord of the Rings']),
    Query.greater('year', 1999)
]);

//order results

const databases1 = new Databases(client, "[DATABASE_ID]");  // 'client' comes from setup
databases.listDocuments(
    'movies', // collectionId
    [], // queries
    25, // limit
    0, // offset
    '', // cursor
    'after', // cursorDirection
    ['title'], // orderAttributes
    ['ASC'] // orderTypes
);

const databases2 = new Databases(client, "[DATABASE_ID]");  // 'client' comes from setup
databases.listDocuments(
    'movies', // collectionId
    [], // query
    25, // limit
    0, // offset
    '', // cursor
    'after', // cursorDirection
    ['title', 'year'], // orderAttributes
    ['ASC', 'DESC'] // orderTypes	
);
*/