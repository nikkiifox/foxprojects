function myFunction(listingID) { 
  //changes the value of the hidden inputs on account.ejs to the proper listing ID of the item to be edited.
  //That data is then accessed by server.js to query the correct listing to be edited.
    document.getElementById("listingID_Type").value = listingID;
    document.getElementById("listingID_Desc").value = listingID;
    document.getElementById("listingID_DateFound").value = listingID;
    document.getElementById("listingID_LocFound").value = listingID;
    document.getElementById("listingID_DateRet").value = listingID;
    document.getElementById("listingID_LocRet").value = listingID;
    document.getElementById("inactiveItem").value = listingID;
    document.getElementById("deleteItem").value = listingID;
    document.getElementById("restoreItem").value = listingID;
}

function myFunctionHome(listingID) {
  document.getElementById("listingID_TypeHome").value = listingID;
  document.getElementById("listingID_DescHome").value = listingID;
  document.getElementById("listingID_DateFoundHome").value = listingID;
  document.getElementById("listingID_LocFoundHome").value = listingID;
  document.getElementById("listingID_DateRetHome").value = listingID;
  document.getElementById("listingID_LocRetHome").value = listingID;
  document.getElementById("inactiveItemHome").value = listingID;
  document.getElementById("deleteItemHome").value = listingID;
}

function validateType() {
    var itemNameLength = document.getElementById("itemName").value;

    if(itemNameLength.length == 0) {
        alert("Field is required!");
        return false;
      }

    alert("Success! The listing has been updated.");
    return true;
}

function validateTypeHome() {
  var itemNameLength = document.getElementById("itemNameHome").value;

  if(itemNameLength.length == 0) {
      alert("Field is required!");
      return false;
    }

  alert("Success! The listing has been updated.");
  return true;
}

function validateDescription() {
    var itemDescLength = document.getElementById("itemDesc").value;

    if(itemDescLength.length == 0) {
        alert("Field is required!");
        return false;
      }

    alert("Success! The listing has been updated.");
    return true;
}

function validateDescriptionHome() {
  var itemDescLength = document.getElementById("itemDescHome").value;

  if(itemDescLength.length == 0) {
      alert("Field is required!");
      return false;
    }

  alert("Success! The listing has been updated.");
  return true;
}

function validateDateFound() {
    var itemDateFound = document.getElementById("dateFound").value;

    if(itemDateFound.length == 0) {
        alert("Field is required!");
        return false;
      }

    alert("Success! The listing has been updated.");
    return true;
}

function validateDateFoundHome() {
  var itemDateFound = document.getElementById("dateFoundHome").value;

  if(itemDateFound.length == 0) {
      alert("Field is required!");
      return false;
    }

  alert("Success! The listing has been updated.");
  return true;
}

function validateLocFound() {
    var itemLocFound = document.getElementById("locFound").value;

    if(itemLocFound.length == 0) {
        alert("Field is required!");
        return false;
      }

    alert("Success! The listing has been updated.");
    return true;
}

function validateLocFoundHome() {
  var itemLocFound = document.getElementById("locFoundHome").value;

  if(itemLocFound.length == 0) {
      alert("Field is required!");
      return false;
    }

  alert("Success! The listing has been updated.");
  return true;
}

function validateDateRet() {
    var itemDateReturned = document.getElementById("dateReturned").value;

    if(itemDateReturned.length == 0) {
        alert("Field is required!");
        return false;
      }

    alert("Success! The listing has been updated.");
    return true;
}

function validateDateRetHome() {
  var itemDateReturned = document.getElementById("dateReturnedHome").value;

  if(itemDateReturned.length == 0) {
      alert("Field is required!");
      return false;
    }

  alert("Success! The listing has been updated.");
  return true;
}

function validateLocRet() {
    var itemLocRet = document.getElementById("locationReturned").value;

    if(itemLocRet.length == 0) {
        alert("Field is required!");
        return false;
      }

    alert("Success! The listing has been updated.");
    return true;
}

function validateLocRetHome() {
  var itemLocRet = document.getElementById("locationReturnedHome").value;

  if(itemLocRet.length == 0) {
      alert("Field is required!");
      return false;
    }

  alert("Success! The listing has been updated.");
  return true;
}

function validateDelete() {
  var deleteItem = document.getElementById("deleteListingID").value;

  if(deleteItem) {
    alert("Success! This listing has been deleted.");
    return true;
  }
}

function validateDeleteHome() {
  var deleteItem = document.getElementById("deleteListingIDHome").value;

  if(deleteItem) {
    alert("Success! This listing has been deleted.");
    return true;
  }
}

function validateRestore() {
  alert("Success! This listing has been restored.");
}

function alertFunc() {
    alert("Success! The listing has been updated.")
}

var input = document.getElementById("searchBox");

//From https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchButton").click();
  }
});

function myQuery() {
  console.log("Inside the function");
  var searchTerm = document.getElementById("searchBox").value; //search keyword
  console.log(searchTerm); //testing

  var searchQuery = "SELECT * FROM Found_Listing WHERE Active = '1' AND Type LIKE '%" + searchTerm + "%' OR Item_Description LIKE'%" + searchTerm + "%' OR Date_Found LIKE '%" + searchTerm + "%' OR Location_Found LIKE '%" + searchTerm + "%' ORDER BY Listing_ID;"
  console.log(searchQuery);

  // $.ajax({url:url, dataType:"json"}).then(function(data) {
  //     console.log(data);
  //     OMDbAPI(data); //OMDbAPI will handle the data
  // });
}

function DBResults(results) {

}