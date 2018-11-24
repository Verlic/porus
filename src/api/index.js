const data = require("./notes.json");

class ContentApi {
  getNote(identifier) {
    return data.find(element => element.id === identifier);
  }

  getNotes() {
    return data;
  }
}

export default ContentApi;
