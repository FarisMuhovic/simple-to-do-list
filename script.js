// adding the task from the input button //
var addtaskbutton = document.getElementById("addbtn");
// add the unordered list element //
var list = document.getElementById("task");

// add condition to the function if nothing in the task dont execute //
addtaskbutton.addEventListener("click", function () {
  var inputText = document.getElementById("inputtask").value;
  if (inputText !== "") {
    document.getElementById("inputtask").value = "";
    // create a new list item //
    const listitem = document.createElement("li");
    // append the item to the unordered list //
    list.appendChild(listitem);
    // create a paragrah element inside the new created list item //
    const listparagraph = document.createElement("p");
    listitem.appendChild(listparagraph);
    // connect input text with paragraph /
    listparagraph.innerHTML = inputText;
    // add buttons to the list items //
    // done button //
    const donebutton = document.createElement("button");
    donebutton.innerHTML = `<i class="fa fa-check"></i>`;
    donebutton.setAttribute("id", "donebtn");
    listitem.appendChild(donebutton);

    donebutton.addEventListener("click", function () {
      donebutton.style.backgroundColor = "orange";
      donebutton.style.color = "white";
      listparagraph.style.textDecoration = "line-through";
      listparagraph.style.color = "grey";
    });

    // delete button //
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = `<i class="fas fa-trash"></i>`;
    deletebutton.setAttribute("id", "deletebtn");
    listitem.appendChild(deletebutton);

    deletebutton.addEventListener("click", function () {
      listitem.remove();
    });
  } else {
    alert("Please name a task.");
  } // else statemenet make a popup saying please enter a task //
});
