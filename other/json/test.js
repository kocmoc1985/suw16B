function Task(text,checked) {
    this.text = text;
    this.checked = checked;
}

var task = new Task("Task 7","false");

var jsonStr = JSON.stringify(task);
console.log(jsonStr);
