var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

firebase.initializeApp({
  apiKey: "AIzaSyCSomI3r-5anGF5BP_qz3_mHeS0i7RcbDw",
  authDomain: "accessibility-a0394.firebaseapp.com",
  projectId: "accessibility-a0394"
});


var db = firebase.firestore();

var businesses = [];
db.collection("Businesses").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    var id = doc.id;
    businesses.push({ id, ...doc.data() });
    console.log(doc.data());
  });

  var restaurantBusinessses = getBusinessesWithTag("Restaurant");
  var supermarketBusinesses = getBusinessesWithTag("Supermarket");
  var hardwareBusinesses = getBusinessesWithTag("Hardware");
  var banksBusinesses = getBusinessesWithTag("Bank");
  var autoBusinesses = getBusinessesWithTag("AutoRepair");
  var grocBusinesses = getBusinessesWithTag("Groceries");
  var mallBusinesses = getBusinessesWithTag("Mall");
  var artBusinesses = getBusinessesWithTag("ArtStore");
  var transBusinesses = getBusinessesWithTag("Transportation");

  
  //TODO: all the rest

  insertRowsForTable("restaurantTable", restaurantBusinessses)
  insertRowsForTable("supermarketTable", supermarketBusinesses)
  insertRowsForTable("hardwareTable", hardwareBusinesses)
  insertRowsForTable("banksTable", banksBusinesses)
  insertRowsForTable("autoTable", autoBusinesses)
  insertRowsForTable("grocTable", grocBusinesses)
  insertRowsForTable("mallTable", mallBusinesses)
  insertRowsForTable("artTable", artBusinesses)
  insertRowsForTable("transTable", transBusinesses)
});

function insertRowsForTable(tableId, inserts) {
  var restaurantTable = document.getElementById(tableId);

  for (let i = 0; i < inserts.length; i++) {
    var row = restaurantTable.insertRow(0);

    var cell = row.insertCell(0);
    cell.innerHTML = inserts[i].id;
  }
}

function getBusinessesWithTag(tag) {
  var businessesWithTag = [];
  businesses.forEach(business => {
    console.log("myBusiness:", business);
    business.BusinessType.forEach(type => {
      if (type == tag) {
        businessesWithTag.push(business);
      }
    })
  });

  return businessesWithTag;
}


