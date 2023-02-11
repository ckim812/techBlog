let postTitle = document.querySelectorAll(".postTitle");

function createNewComment() {
  console.log("create new comment click works");
}

postTitle.forEach((el) => el.addEventListener("click", createNewComment));
