import { Account, ID, Client } from 'react-native-appwrite';

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.way.aura",
  projectId : "672f1c0e002f06b926d7",
  databaseId: "672f1f570007ba6b8d1a",
  userCollectionId: "672f21740008ec826137",
  videoCollectionId : "672f21b00036efcea73b",
  storageId: "672f23800007b533f32d",
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
 
export const createUser = ()=>{
// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
 
}

