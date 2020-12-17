note_of_specific_user();  // defined later



notes = localStorage.getItem("notes");
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let addName = document.getElementById("addName");
  //   let notes = localStorage.getItem("notes");

var star = document.getElementById("check").checked;
imp = ""
if(!star) {imp = "(Important)"}
else {imp=""}

  console.log(imp)


userName=""
  if(addName.value=="")
    userName = "Annonymous"
  else userName = addName.value

  myObj = {
    name : userName,
    title: addTitle.value,
    text: addTxt.value,
    status: imp
  }
console.log("Nm = "+name)
  if (notes == null) {
    notesObj = [];
  }

  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

  if (!checkImp.checked)
note_of_specific_user()
})




// Function to show elements from localStorage
function showNotes() {
  var notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes)
  }

  let html = "";
  notesObj.forEach(function (element, index) {
  
    html += `   
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}<i  style="color : #d0e1e1;">${element.status}</i></h5>
                        <p class="card-text" id="text"> ${element.text}</p>
                        <p style="color : #d0d0e1;" class="name"><i>${"~By "+element.name}</i></p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  var notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}



// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    let cardAuthor = element.getElementsByClassName("name")[0].innerText;
    if (cardTxt.includes(inputVal) && element.getElementsByClassName("name")[0].innerHTML.includes(uname)){
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
})

info = sessionStorage.getItem("Curr_session")
session_info = JSON.parse(info)
var uname = session_info.name
var checkImp = document.getElementById("impcheck")
checkImp.addEventListener("change",function(){
console.log(checkImp.checked)
if(checkImp.checked)
{
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    if(element.getElementsByTagName("h5")[0].innerHTML.includes("(Important)")  && element.getElementsByClassName("name")[0].innerHTML.includes(uname))
     element.style.display = "block"
    else element.style.display = "none"
  })
}
  else note_of_specific_user()
})



function note_of_specific_user(){

info = sessionStorage.getItem("Curr_session")
session_info = JSON.parse(info)
console.log(session_info)

if(session_info==null)
{ 
document.getElementById("navsignout").style.visibility = "hidden"
}

else{
   showNotes()
    document.getElementById("navsignin").style.visibility = "hidden"
    document.getElementById("navsignup").style.visibility = "hidden"
    var uname = session_info.name
    console.log(uname)
    let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    if(element.getElementsByClassName("name")[0].innerHTML.includes(uname))
    {element.style.display = "block"}
    else {element.style.display = "none"}
  })
}
}

function clearSession(){
    sessionStorage.clear();
}

// function login_saved(){
//   info = sessionStorage.getItem("Curr_session")
//   session_info = JSON.parse(info)
  
//   cur_sess = localStorage.getItem("Curr_session")
//   if(cur_sess!=null)
//   localStorage.clear("Curr_session")
  
//   localStorage.setItem("Curr_session",JSON.stringify(session_info))
  
//   }


/*
Further Features:
1. Add Title [[DONE]]
2. Mark a note as Important [[DONE]]
3. Separate notes by user [[DONE but not satisfied]]
4. Sync and host to web server
*/