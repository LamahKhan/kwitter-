const firebaseConfig = {
      apiKey: "AIzaSyBihJ2KygMgU1fI88moOHQtH46ut-8OPf8",
      authDomain: "classtest-fec14.firebaseapp.com",
      projectId: "classtest-fec14",
      storageBucket: "classtest-fec14.appspot.com",
      messagingSenderId: "609635233391",
      appId: "1:609635233391:web:0de56cceed0f18850a679a",
      measurementId: "G-YDL869185C"
    };
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
function addRoom()
{
    room_name = document.getElementById("room_name").value;
     
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})
         Room_names = childKey;
       //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
({      //End code
});};
getData(  {

}  );
