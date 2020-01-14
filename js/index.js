// console.log("hello");

//Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//Add Methods to display Prototype
Display.prototype.add = function(book) {
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                        <td scope="col">${book.name}</td>
                        <td scope="col">${book.author}</td>
                        <td scope="col">${book.type}</d>
                    </tr>`
    tableBody.innerHTML += uiString;
};

//clear Form prototype
Display.prototype.clear = function() {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  display.add(book);
  display.clear();
}
