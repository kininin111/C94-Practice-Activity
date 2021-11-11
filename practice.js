var firebaseConfig = {

    apiKey: "AIzaSyBrMq8tgOWWEANtzgyfRcWSGyc2AEwZNGQ",
  
    authDomain: "kwitter-d5450.firebaseapp.com",
  
    databaseURL: "https://kwitter-d5450-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-d5450",
  
    storageBucket: "kwitter-d5450.appspot.com",
  
    messagingSenderId: "680157648491",
  
    appId: "1:680157648491:web:6c85ba2c1d52321233832e"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose : "adding user inside the value"
    });
}