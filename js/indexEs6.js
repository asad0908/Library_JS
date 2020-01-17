console.log("ES6 VERSION");
showbooks();

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  //Add Book Method
  add(book) {

    //Storing in localStorage
    let bookName = localStorage.getItem("bookName");
    let bookAuthor = localStorage.getItem("authorName");
    let bookType = localStorage.getItem("typeName");
    let bookObj;
    let authorObj;
    let typeObj;
    //BOOK OBJ
        if(bookName == null){
          bookObj = [];
        }
        else{
          bookObj = JSON.parse(bookName);
        }
        bookObj.push(book.name);
        localStorage.setItem("bookName", JSON.stringify(bookObj));
    //Author OBJ
        if(bookAuthor == null){
          authorObj = [];
        }
        else{
          authorObj = JSON.parse(bookAuthor);
        }
        authorObj.push(book.author);
        localStorage.setItem("authorName", JSON.stringify(authorObj));
    //TYPE OBJ
        if(bookType == null){
          typeObj = [];
        }
        else{
          typeObj = JSON.parse(bookType);
        }
        typeObj.push(book.type);
        localStorage.setItem("typeName", JSON.stringify(typeObj));
    //Storing in db ends
          
    showbooks();

    // let uiString = `<tr>
    //                           <td scope="col">${book.name}</td>
    //                           <td scope="col">${book.author}</td>
    //                           <td scope="col">${book.type}</d>
    //                       </tr>`;
    // tableBody.innerHTML += uiString;
        
  }
  

  //Validate Method
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  //Dismissable Alert Method
  show(type, givenMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show"                         role="alert">
                           <strong>Message: </strong> ${givenMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                          </button>
                       </div>`;

    setTimeout(() => {
      message.innerHTML = "";
    }, 4000);
  }

  //Clear Method
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }
}

function showbooks(){
    let bookName = localStorage.getItem("bookName");
    let bookAuthor = localStorage.getItem("authorName");
    let bookType = localStorage.getItem("typeName");
    let bookObj;
    let authorObj;
    let typeObj;

    //BOOK OBJ
    if(bookName == null){
      bookObj = [];
    }
    else{
      bookObj = JSON.parse(bookName);
    }
    //Author OBJ
    if(bookAuthor == null){
      authorObj = [];
    }
    else{
      authorObj = JSON.parse(bookAuthor);
    }
    //TYPE OBJ
    if(bookType == null){
      typeObj = [];
    }
    else{
      typeObj = JSON.parse(bookType);
    }

    let tableBody = document.getElementById("tableBody");
        let uiString = "";
          bookObj.forEach(function(element, index) {
              uiString += `<tr><td scope="col">${element}</td></tr>` 
          });
          authorObj.forEach(function(element, index) {
            uiString += `<tr><td scope="col">${element}</td><tr>` 
          });
          typeObj.forEach(function(element, index) {
            uiString += `<tr><td scope="col">${element}</td></tr>` 
          });
      tableBody.innerHTML += uiString;
}

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
  //   console.log(book);
  
  let display = new Display();

  
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book Added Successfully!");
  } else {
    display.show("danger", "Book Cannot be Added!!");
  }
}
