//Getting different HTML Elements

//..............................................................................

//gets the firstsecttion ( i.e food-menu section)
const firstSection = document.getElementById("firstsection");

//gets the listhead(ol wrapping the li)
const listHead = document.getElementById("List-head");

//gets the ordered(ol wrapping the li which is ordered by the customer)
const ordered = document.getElementById("ordered");

//gets each div wrapping the list item
const menuList = document.getElementsByClassName("menu-list");

//gets the button for adding dish to food-menu;
const addfood = document.getElementById("addfood");

//gets the print button
const printButton = document.getElementById("printButton");

//gets the backbutton to enable flipping back to food-menu view
const backButton = document.getElementById("backButton");

//adds eventlistner to the printbutton
printButton.addEventListener("click", printFunction);

//adds eventlistner to the backbutton
backButton.addEventListener("click", backFunction);

//gets the add button
var add = document.getElementsByClassName("add");

//
const addfoodbutton = document.getElementById("addfoodbutton");

function printFunction() {
  //gets all span element with class "remove"
  //Why? to hide elements with text "remove" on print
  console.log(ordered.children)
  if(ordered.children.length < 1){
    return alert("Cannot make empty order!");
  }
  const deletekey = Array.from(document.getElementsByClassName("remove"));
  deletekey.forEach((value) => {
    value.className = "hide";
  });
  //hides print button
  printButton.style.display = "none";
  // hides first-section enabling only ordered section
  firstSection.style.display = "none";
  backButton.style.display = "block";
}
function backFunction() {
  //gets all span element with class "hide"
  //Why? to enable elements with text "remove" on flipping back to food-menu page
  const deletekey = Array.from(document.getElementsByClassName("hide"));
  deletekey.forEach((value) => {
    value.className = "remove";
  });
  //displays print button
  printButton.style.display = "block";
  //displays the hidden firstsection
  firstSection.style.display = "block";
  backButton.style.display = "none";
}

//gets the foods in the list-head
var id1 = document.getElementById("list1");
var id2 = document.getElementById("list2");
var id3 = document.getElementById("list3");
var id4 = document.getElementById("list4");
var id5 = document.getElementById("list5");
var collection = [id1, id2, id3, id4, id5];

// To Delete a food
function removeFoodElement() {
  const deletekey = document.getElementsByClassName("remove");
  const deleteKeyToArray = Array.from(deletekey);
  deleteKeyToArray.forEach((value) => {
    value.addEventListener("click", () => {
      removeElementFunction(value);
    });
  });
  function removeElementFunction(value) {
    value.parentElement.parentElement.remove();
  }
}
removeFoodElement();

//to add foood to the food-menu
var id = 6;
var idplus;
addfoodbutton.addEventListener("click", addFoodFunction);
function addFoodFunction() {
  var foodvalue = document.getElementById("addfood").value;
  foodvalue.trim();

  //validating the input
  !foodvalue ? alert("New Food Menu-box is Empty") : addingFood(foodvalue);
}

function addingFood(foodvalue) {
  idplus = id++;

  // creating new menu-list(new food in the food menu)
  var doc2 = document.createElement("div");
  var li2 = document.createElement("li");
  var textnode2 = document.createTextNode(foodvalue);
  doc2.className = "menu-list";
  listHead.append(doc2);
  doc2.append(li2);
  li2.append(textnode2);

  //creating the Add button for the new food
  var doc3 = document.createElement("div");
  var span = document.createElement("span");
  span.className = "add";
  var textnode3 = document.createTextNode("Add");
  doc2.append(doc3);
  doc3.append(span);
  span.append(textnode3);

  //creating the remove button for the new food
  let span_ = document.createElement("span");
  span_.className = "remove";
  let textnode3_ = document.createTextNode("Remove");
  doc3.append(span_);
  span_.append(textnode3_);

  //adding new id to the new food
  function ID() {
    doc2.id = `list${idplus}`;
    //to empty the input after adding the new food
    addfood.value = "";
  }
  ID();

  //function to enable adding new foods to customer`s order section
  function AddingFoodarray() {

    //get new foods by their new genrated ID
    var newId = document.getElementById(`list${idplus}`);

    //target new food add buttons
    var newFoodAddButton = newId.lastElementChild.firstElementChild;

    newFoodAddButton.addEventListener("click", Add);

    function Add() {
      var items = newId.firstElementChild.innerHTML;

      //create new elements to enable adding of new food to the ordered side
      var doc = document.createElement("div");
      var li = document.createElement("li");
      var textnode = document.createTextNode(items);
      ordered.append(doc);
      doc.append(li);
      li.append(textnode);
      doc.className = "menu-list";

      //to create remove elemets for newly created food at the ordered side
      let doc_ = document.createElement("div");
      let span_ = document.createElement("span");
      span_.className = "remove";
      let textnode_ = document.createTextNode("Remove");
      doc.append(doc_);
      doc_.append(span_);
      span_.append(textnode_);

      //this is called each time new food is added to the order side or created from the input to keep to activate all remove element.
      removeFoodElement();
    }
  }
  AddingFoodarray();
  
 
}

//collection is called to get all food items already on the page before. and help activate their remove and add button
function Collection() {
  collection.forEach((item) => {
    item.lastElementChild.firstElementChild.addEventListener("click", Add);


    function Add() {
      var items = item.firstElementChild.innerHTML;
      var doc = document.createElement("div");
      var li = document.createElement("li");
      var textnode = document.createTextNode(items);
      ordered.append(doc);
      doc.append(li);
      li.append(textnode);
      doc.className = "menu-list";
      let doc_ = document.createElement("div");
      let span_ = document.createElement("span");
      span_.className = "remove";
      let textnode_ = document.createTextNode("Remove");
      doc.append(doc_);
      doc_.append(span_);
      span_.append(textnode_);

      //this is called each time new food is added to the order side or created from the input to keep to activate all remove element.
      removeFoodElement();
    }
  });
  removeFoodElement();
}
Collection();


//The End

//.....................................................................................................................................................