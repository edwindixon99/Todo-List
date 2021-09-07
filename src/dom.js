{/* <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
            <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
          </a> */}




const sidebar = document.getElementById("sideBar");
console.log(sidebar)
// sidebar.innerHTML = "";

function listProject(project) {
  console.log("gjgj")
  const sidebar = document.getElementById("sideBar");
  const atag = document.createElement("a");
  atag.href = "#";
  atag.classList.add("list-group-item", "list-group-item-action", "py-2", "ripple")
  const itag = document.createElement("i");
  itag.classList.add("fas", "fa-chart-area", "fa-fw", "me-3")
  const spanTag = document.createElement("span");
  spanTag.textContent = project.title;
  atag.appendChild(itag);
  atag.appendChild(spanTag);
  sidebar.appendChild(atag);
}


function taskInfo(task) {
  const con = document.createElement("div");
  con.classList.add("container");
  const r1 = document.createElement("div");
  r1.classList.add("row");
  const title = document.createElement("h5");
  title.textContent = task.title
  r1.appendChild(title)

  const r2 = document.createElement("div");
  r2.classList.add("row");
  
  const c1 = document.createElement("div");
  c1.classList.add("col");
  const date = document.createElement("h6");
  date.textContent = task.due
  c1.appendChild(date);

  const c2 = document.createElement("div");
  c2.classList.add("col");

  const prior = document.createElement("h6");
  prior.textContent = task.priority;
  c2.appendChild(prior);

  con.appendChild(r1)
  r2.appendChild(c1)
  r2.appendChild(c2)
  con.appendChild(r2)

  return con
}


function displayTask(task) {
  console.log(task)
  const sidebar = document.getElementById("taskList");
  const con = document.createElement("div");
  con.classList.add("container");
  const atag = document.createElement("a");
  atag.id = task.id;
  atag.classList.add("list-group-item", "list-group-item-action", "py-2", "ripple")
  const itag = document.createElement("i");
  itag.classList.add("fas", "fa-chart-area", "fa-fw", "me-3")
  const spanTag = document.createElement("span");

  spanTag.appendChild(taskInfo(task));
  atag.appendChild(itag);
  atag.appendChild(spanTag);
  con.appendChild(atag);
  sidebar.appendChild(con);
}

function displayTaskDetails(task) {
  const parentTag= document.getElementById(task.id);
  
  const encaps = document.createElement("div");
  encaps.classList.add("row");


  const con = document.createElement("div");
  con.classList.add("container");
  const r1 = document.createElement("div");
  r1.classList.add("row");
  const desc = document.createElement("p");
  desc.textContent = task.desc
  r1.appendChild(desc)

  const r2 = document.createElement("div");
  r2.classList.add("row");

  con.appendChild(r1);
  con.appendChild(r2);
  encaps.appendChild(con);
  parentTag.appendChild(encaps);
}


// addProject()
// addProject()

export {displayTask, listProject, displayTaskDetails};