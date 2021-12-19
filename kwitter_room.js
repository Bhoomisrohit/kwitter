
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyB19VHUJ17U-7g9RsnG4q5wD7QdrGUbY5c",
  authDomain: "kwitter2-c48cc.firebaseapp.com",
  databaseURL: "https://kwitter2-c48cc-default-rtdb.firebaseio.com",
  projectId: "kwitter2-c48cc",
  storageBucket: "kwitter2-c48cc.appspot.com",
  messagingSenderId: "234401678697",
  appId: "1:234401678697:web:bd95c06af74cebd4baa9f8"
};



    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem ("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
     function addRoom()
     {
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({ 
               purpose : "adding room name" 
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";

     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name- "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";

}
function logout()
{
  localStorage.removeItem("user_name"); 
  localStorage.removeItem("room_name");  
  window.location="index.html";  
}   

