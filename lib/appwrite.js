import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.mupoy.mupoy',
    projectId: '665bae44001be6241e5d',
    databaseId: '665bb2b700273abe6abc',
    userCollectionId: '665bb2f900277b4b5792',
    videoCollectionId: '665bb34a002d13fa530c',
    storageId: '665bb662000b3ba5baed'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    
    console.log('We arrived' ,{ email,password,username})
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,
        )
        console.log('User was created')
 
        if (!newAccount) throw Error;
        console.log('It wasnt a new account')

        const avatarUrl =avatars.getInitials(username)

        await signIn(email ,password)
        console.log('Signed In')

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
              accountId: newAccount.$id,
              email: email,
              username: username,
              avatar: avatarUrl,
            }
          );
        
        console.log('Document created')

          return newUser;

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

//returns a session
export const signIn = async(email ,password) => {
    try {
        //allows people to have a session by passing the valid email and password
        const session = await account.createEmailPasswordSession(email,password)
        return session

    } catch (error) {
        console.log(error)
        
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()

        if (!currentAccount) throw Error()

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId',currentAccount.$id)]
        )

        if(!currentUser) throw Error()
        
            return currentUser.documents[0]
    } catch (error) {
        
    }
}