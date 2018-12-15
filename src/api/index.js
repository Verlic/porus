const data = require('./notes.json');

class ContentApi {
  getNote(identifier) {
    return data.find(element => element.id === identifier);
  }

  getNotes() {
    return data;
  }

  updateNote(note) {
    const index = data.map(note => note.id).indexOf(note.id);

    if (index === -1) {
      // Note not found
      return console.error('Unable to find note with id ' + note.id);
    }

    // Index found
    data[index] = note;
  }

  insert(note) {
    data.push(note);
  }

  remove(note) {
    const index = data.map(note => note.id).indexOf(note.id);

    if (index === -1) {
      // Note not found
      return console.error('Unable to delete note with id ' + note.id);
    }

    // Index found
    data.splice(index, 1);
  }
}

export default ContentApi;
