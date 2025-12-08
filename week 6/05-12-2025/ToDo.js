let add = document.getElementById("add");
let task = document.getElementById("task");
let data = document.getElementById("data");
let tool = document.getElementsByClassName("tooltip")[0];
async function myFuncion() {
  if (`${task.value}` != "") {
    let option = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        task: `${task.value}`,
        pending: true,
      }),
    };
    let res = fetch("http://localhost:3000/tasks", option);
  } else {
    tool.classList.add("up");
    setTimeout(() => {
      tool.classList.remove("up");
    }, 2000);
  }
}
add.addEventListener("click", myFuncion);
async function main() {
  let res = await fetch("http://localhost:3000/tasks");
  let val = await res.json();
  let arr = Array.from(val);
  data.innerHTML = "";
  let flag;
  arr.map((value) => {
    flag = value.pending;
    if (flag) {
      data.innerHTML += `<div class="sub">
                        <p onclick="doneFunction(event)" id=${value.id}>${value.task}</p>
                        <button onclick="editFunction(event)" data-id=${value.id} id="edit" type="button">edit</button>
                        <button onclick="delFunction(event)" data-id=${value.id} type="button">delete</button>
                        </div>
                        `;
    } else {
      data.innerHTML += `<div class="sub">
                        <p onclick="doneFunction(event)" id=${value.id}><del>${value.task}</del></p>
                        <button onclick="editFunction(event)" data-id=${value.id} id="edit" type="button">edit</button>
                        <button onclick="delFunction(event)" data-id=${value.id} type="button">delete</button>
                        </div>
                        `;
    }
  });
}
main();
async function delFunction(event) {
  let x = event.target.dataset.id;
  let res = await fetch("http://localhost:3000/tasks");
  let val = await res.json();
  let arr = Array.from(val);
  arr.map(async (value) => {
    if (value.id == x) {
      await fetch(`http://localhost:3000/tasks/${value.id}`, {
        method: "DELETE",
      });
    }
  });
}
async function editFunction(event) {
  let x = event.target.dataset.id;
  let b = document.getElementById("edit");
  let pop = document.getElementsByClassName("pop")[0];
  pop.classList.add("up");
  let popinp = document.getElementById("popinp");
  let edit2 = document.getElementById("edit2");
  let res = await fetch("http://localhost:3000/tasks");
  let val = await res.json();
  let arr = Array.from(val);
  arr.map(async (value) => {
    if (value.id == x) {
      popinp.value = `${value.task}`;
      edit2.addEventListener("click", async () => {
        pop.classList.remove("up");
        await fetch(`http://localhost:3000/tasks/${value.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            task: `${popinp.value}`,
          }),
        });
      });
    }
  });
}
async function doneFunction(event) {
  let x = event.target;
  let res = await fetch("http://localhost:3000/tasks");
  let val = await res.json();
  let arr = Array.from(val);
  arr.map(async (value) => {
    if (value.task == x.innerHTML) {
      await fetch(`http://localhost:3000/tasks/${value.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          pending: !value.pending,
        }),
      });
    }
  });
}
