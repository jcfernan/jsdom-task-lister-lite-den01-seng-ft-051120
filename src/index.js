const task = document.querySelector('#list')
const taskForm = document.querySelector('#create-task-form')


document.addEventListener("submit", addTask);

function addTask (event) {
  event.preventDefault();
  // console.log("form listener", event.target);

  const taskFormData = new FormData(event.target);
  const taskText = commentFormData.get("task");

  const comment = document.createElement("li");
  comment.textContent = commentText;
  comments.append(comment);

  event.target.reset();

  // console.log("comment text", commentText);
}





