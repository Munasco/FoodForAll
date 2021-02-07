import { useState, useEffect } from 'react';
import firebase from 'config/FirebaseConfig';



function useFirebase() {
  
    const[user, setUser] = useState(null)   
    const[userLoading, setUserLoading] = useState(true)
    const[name, setName] = useState('')
    const[uniqueId, setUniqueID] = useState(0)
  
    useEffect(() => {   
      firebase.auth().onAuthStateChanged(userAuth => {    
        //console.log("\n\nUSER AUTH CHANGED\n\n", userAuth)  
        setUser(userAuth)                          
        setUserLoading(false) 
      });      
    },[]);
  
/**
 * REAUTHENTICATE ON PASSWORD CHANGE
 * var user = firebase.auth().currentUser;
var credential;

// Prompt the user to re-provide their sign-in credentials

user.reauthenticateWithCredential(credential).then(function() {
  // User re-authenticated.
}).catch(function(error) {
  // An error happened.
});
 */

    const logout = () => {
      firebase.auth().signOut().then(function() {
          console.log("SIGNED OUT")
          setUser(null)                    
        }).catch(function() {
          console.log("Error when logging out")
          //Alert.alert(JSON.stringify(error.message))
          //console.log(JSON.stringify(error))
        });
    }

    

    return { user, logout, name, uniqueId, userLoading }

}

export default useFirebase;