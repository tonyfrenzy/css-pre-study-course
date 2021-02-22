var notesCount = function () {
  	var notes = document.querySelectorAll('article');
	var notesCount = notes.length;
	var notesCountDisplay = document.getElementById('notesCount');
	notesCountDisplay.innerText = notesCount;
}

var hideClearModal = function () {
  noteTitle.value = "";
  noteBody.value = "";
  noteImgSource.value = "";
  newNoteModal.style.display = "none";
}

notesCount();

/**
* Modal related
*/
var newNoteModal = document.getElementById("newNoteModal");
var newNoteBtn = document.getElementById("newNoteBtn");

var noteTitle = document.getElementById("noteTitle");
var noteBody = document.getElementById("noteBody");

var span = document.getElementsByClassName("close")[0];
var cancelBtn = document.getElementById("cancelBtn");


newNoteBtn.onclick = function() {
  newNoteModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  newNoteModal.style.display = "none";
}
cancelBtn.onclick = function() {
  // console.log(noteBody.value,noteTitle.value)
  event.preventDefault();
  hideClearModal();
}

addBtn.onclick = function() {
  // console.log(noteBody.value,noteTitle.value)
  event.preventDefault();

  //
  var article = document.createElement("article");
  var noteTitleNode = document.createElement("h2");
  var notePImageNode = document.createElement("p");
  var noteImageNode = document.createElement("img");
  var noteBodyNode = document.createElement("p");

  article.appendChild(noteTitleNode);
  article.appendChild(notePImageNode);
  	notePImageNode.appendChild(noteImageNode);
  article.appendChild(noteBodyNode);
  
  noteTitleNode.innerText = noteTitle.value;
  noteImageNode.src = noteImgSource.value;
  noteBodyNode.innerText = noteBody.value;

  var articles = document.getElementById("articles");
  var fChild = articles.firstChild;
  articles.insertBefore(article, fChild);

  // Update notes count
  notesCount();

  // Clear form and hide modal.
  hideClearModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == newNoteModal) {
    newNoteModal.style.display = "none";
  }
}