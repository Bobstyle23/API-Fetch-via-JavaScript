document.getElementById("getComments").addEventListener("click", getComment);
function getComment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2 class="mb-4">Comments</h2>`;
      data.forEach((comments) => {
        output += `<ul class="list-group mb-3">
            <li class="list-group-item active">ID: ${comments.id}</li>
            <li class="list-group-item">Name: ${comments.name}</li>
            <li class="list-group-item">Email: ${comments.email}</li>
            <li class="list-group-item">Body: ${comments.body}</li>
            </ul>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

document.getElementById("getUsers").addEventListener("click", getUsers);
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2 class="mb-4">Users</h2>`;
      data.forEach((user) => {
        output += `<ul class="list-group mb-3">
          <li class="list-group-item  active">ID: ${user.id}</li>
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Email: ${user.email}</li>
          <li class="list-group-item">Address: ${user.address.city}, ${user.address.street}</li>
          <li class="list-group-item">Phone: ${user.phone}</li>
          <li class="list-group-item">Website: ${user.website}</li>
          <li class="list-group-item">Company: ${user.company.name}, ${user.company.catchPhrase}</li>
          </ul>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

document.getElementById("getPosts").addEventListener("click", getPosts);
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2 class="mb-4">Posts</h2>`;
      data.forEach((post) => {
        output += `
          <div class="card card-body mb-3">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          </div>
          `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

document.getElementById("addPost").addEventListener("submit", addPost);
function addPost(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
