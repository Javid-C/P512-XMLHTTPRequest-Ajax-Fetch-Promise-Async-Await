//XML section
// const xhr = new XMLHttpRequest();

// //Methods: GET,POST,PUT,PATCH,DELETE
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let request = document.getElementById("request");
//     let datas = JSON.parse(this.response);
//     let h1 = document.createElement("h1");
//     h1.innerText = "User Details";
//     let ul = document.createElement("ul");
//     datas.forEach((data) => {
//       let li = document.createElement("li");

//       li.innerText = `Username: ${data.username}, Email:${data.email}`;
//       ul.append(li);
//     });
//     request.append(h1, ul);
//   }
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.send();

//Ajax section

// $(document).ready(function () {
//   $.ajax({
//     url: "https://sonplaceholder.typicode.com/todos",
//     dataType: "json",
//     success: function (datas) {
//       let row = document.createElement("div");
//       let toDos = document.createElement("div");
//       let done = document.createElement("div");
//       let todosUl = document.createElement("ul");
//       let doneUl = document.createElement("ul");
//       let container = document.querySelector(".container");
//       row.className = "row justify-content-between";
//       toDos.className = "col-lg-5 border border-danger";
//       toDos.innerText = "To Do List";
//       done.className = "col-lg-5 border border-success";
//       done.innerText = "Done";
//       todosUl.className = "list-group";
//       doneUl.className = "list-group";
//       datas.forEach((data) => {
//         let li = document.createElement("li");
//         li.className = "list-group-item";
//         li.innerText = `${data.title}`;
//         if (!data.completed) {
//           todosUl.append(li);
//         } else {
//           doneUl.append(li);
//         }
//         // console.log(data);
//       });
//       toDos.append(todosUl);
//       done.append(doneUl);
//       row.append(toDos, done);
//       container.append(row);
//     },
//     error: function (err) {
//       console.log(err);
//     },
//   });
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => {
//     let container = document.querySelector(".container");
//     let row = document.createElement("div");
//     row.className = "row justify-content-between";
//     res.forEach((data) => {
//       //   let card = document.createElement("div");
//       //   let cardBody = document.createElement("div");
//       //   let title = document.createElement("h5");
//       //   let subtitle = document.createElement("h6");
//       //   let text = document.createElement("p");
//       //   card.style.width = "18rem";
//       //   title.className = "card-title";
//       //   subtitle.className = "card-subtitle mb-2 text-muted";
//       //   text.className = "card-text";
//       //   title.innerText = `Fullname: ${data.name}, Username: ${data.username}`;
//       //   subtitle.innerText = `Email address: ${data.email}`;
//       //   text.innerHTML = `<strong>Address</strong> <br>
//       //     Street: ${data.address.street},<br>
//       //      City: ${data.address.city}
//       //     `;
//       //   cardBody.append(title, subtitle, text);
//       //   card.append(cardBody);
//       //   row.append(card);
//       row.innerHTML += `<div class="card" style="width: 18rem;">
//       <div class="card-body">
//           <h5 class="card-title">Fullname: ${data.name}, Username: ${data.username}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">Email address: ${data.email}</h6>
//           <p class="card-text"><strong>Address</strong><br>
//           Street: ${data.address.street}, <br>
//           City: ${data.address.city}
//           </p>
//       </div>
//   </div>`;
//     });
//     container.append(row);
//   });

//Promise section

// let number = Math.random() * 10;

// const promise = new Promise((resolve, reject) => {
//   if (number < 5) {
//     setTimeout(() => {
//       resolve("promise is successfuly finished");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("promise failed");
//     }, 2000);
//   }
// });

// console.log("before promise");

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("after promise");

// const p1 = "Hey";

// const p2 = Promise.reject("promise failed");

// const p3 = 5728;

// Promise.all([
//   p1,
//   p2.catch((err) => {
//     console.log(err);
//   }),
//   p3,
// ])
//   .then((promises) => {
//     console.log(promises);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchPosts() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");
  let response = await result.json();
  response.forEach((data) => {
    console.log(data);
  });
}

fetchPosts();
