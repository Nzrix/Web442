// localStorage.clear();

function getComments() {
  let comments = localStorage.getItem("comments");

  return comments ? JSON.parse(comments) : [];
}
function saveCommet(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}
function clearComments() {
  localStorage.clear();
}

function displayComment() {
  const comments = getComments();
  const commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML = "";

  comments.forEach((comment) => {
    const p = document.createElement("p");
    console.log(comments);
    p.textContent = comment.text;
    commentsDiv.appendChild(p);
  });
}

const form = document.getElementById("new-comment");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const commentText = document.getElementById("comment-text").value;
  let comments = getComments();

  comments.push({ text: commentText });
  saveCommet(comments);
  document.getElementById("comment-text").value = "";

  displayComment();
});

form.addEventListener("reset", function (e) {
  e.preventDefault();
  clearComments();
  document.getElementById("comment-text").value = "";
  displayComment();
});
displayComment();
