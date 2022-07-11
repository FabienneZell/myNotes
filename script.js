let titleArray = ['TO DO', 'Einkaufen'];
let noteArray = ['aufräumen', 'Brot, Nudeln, Eis'];

loadLocalStorage();


function render() {
  let content = document.getElementById('content');
  content.innerHTML = ``;
  content.innerHTML += `<h1>my N O T E S</h1>`;
  content.innerHTML += `
  <div class="write">
    <input id="titleInput" placeholder="Titel">
      <br>
    <textarea id="noteInput" placeholder="Notiz schreiben..."></textarea>
      <br>
    <button onclick="addNote()" id="addButton">Speichern</button>
  </div>`;

  for (let i = 0; i < titleArray.length; i++) {
    const title = titleArray[i];
    const note = noteArray[i];

    content.innerHTML += `
    <div class="note">
      <div class="text-width">
        <b>${title}</b>
      </div>
       <br>
      <div class="text-width">
       ${note}
      </div>
      <a href="#"><img src="img/delete.png" id="deleteButton" onclick="deleteNote(${i})"></a>
        <br><br>
    </div>`;
  }
}


function addNote() {
  let titles = document.getElementById('titleInput');
  let notes = document.getElementById('noteInput');

  titleArray.push(titles.value);
  noteArray.push(notes.value);

  render();
  saveLocalStorage();
}


function deleteNote(i) {
  titleArray.splice(i, 1);
  noteArray.splice(i, 1);

  render();
  saveLocalStorage();
}


function saveLocalStorage() {
  let titleArrayAsText = JSON.stringify(titleArray);
  let noteArrayAsText = JSON.stringify(noteArray);

  localStorage.setItem('titleArray', titleArrayAsText);
  localStorage.setItem('noteArray', noteArrayAsText);
}


function loadLocalStorage() {
  let titleTextAsArray = localStorage.getItem('titleArray');
  let noteTextAsArray = localStorage.getItem('noteArray');

  if (titleTextAsArray && noteTextAsArray) {
    titleArray = JSON.parse(titleTextAsArray);
    noteArray = JSON.parse(noteTextAsArray);
  }
}
