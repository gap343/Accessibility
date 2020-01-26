// document.forms["my-form"].onsubmit = function(e) {
//     e.preventDefault();
//     console.log(e);
//     alert("usubmitted!!")
// }

// var restaurant = document.getElementById('restaurant-checkbox');

// function submittedMyForm() {
//     // e.preventDefault();
//     console.log("done!!");
// }

var Businessname = "Target";
//<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
//<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-firestore.js"></script>

$("#my-form").on('submit', function (e) {
    alert("THANK YOU FOR YOUR SUBMITAL!!")
    e.preventDefault();
    var formData = new FormData(document.querySelector('#my-form'));
    var BusinessType = [];
    var x = 0;
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
        BusinessType.push(pair[0]);
    }
    Businessname = prompt("What is your company/store name?")

    firebase.initializeApp({
        apiKey: "AIzaSyCSomI3r-5anGF5BP_qz3_mHeS0i7RcbDw",
        authDomain: "accessibility-a0394.firebaseapp.com",
        projectId: "accessibility-a0394"
    });

    var db = firebase.firestore();
    db.collection("Businesses").doc(Businessname).set({ BusinessType });
    console.log("Called db collection Businesses");

    console.log(formData);
    window.location.href = "index.html";

});