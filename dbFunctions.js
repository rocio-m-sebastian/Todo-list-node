const fs = require('fs');

function jsonReader(filePath) {
  try {
    const jsonString = fs.readFileSync(filePath);
    const data = JSON.parse(jsonString);
    this.todoList = data;
		return this.todoList;
  } catch (err) {
    console.log(err);
    return;
  }
};

// update json
function jsonUpdate(list) {
    jsonReader("./data.json");
    this.todos = list;
    fs.writeFile("./data.json", JSON.stringify(this.todos, null, 2), err => {
        if (err) console.log("Error writing file:", err);
    });
}

module.exports = {
  jsonReader,
  jsonUpdate,
};