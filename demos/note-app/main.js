let input = document.querySelector("input");
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");
let noteList = document.querySelector("ul");
let notes = [];

addBtn.addEventListener("click", function () {
  if (input.value.length > 0) {
    notes.push(input.value);
    console.log(notes);

    let newNote = document.createElement("li");
    newNote.textContent = notes[notes.length - 1];
    noteList.append(newNote);
  } else {
    alert("error");
  }
  input.value = "";
});

clearBtn.addEventListener("click", function () {
  noteList.innerHTML = "";
});
