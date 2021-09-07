import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style/style.css'
import {displayTask, listProject, displayTaskDetails} from './dom'
import {ProjectList, Task, Project} from './objects';





let g1 = new Project("Todo-List");

// addProject(g1);
// listProject(g1);

let t1 = new Task("jkldsdfvcbcvf", "kfj", "jksdfhak", "klsdj");
let t2 = new Task("jkld fsd ff", "kfj", "jksdfhak", "klsdj");
let t3 = new Task("jklfsddf", "kdffj", "jkgfsdfhak", "klsdj");
let t4 = new Task("Hello my name is dsljfkl;sjfklasjdfljslfjs;", "kfj", "jksgfdfhak", "klsdj");

g1.tasks = [t1,t2,t3,t4];
console.log(g1)
displayTask(t1)
displayTaskDetails(t1)
// displayTasks()
// displayTasks()
// displayTasks()
// displayTasks()
// displayTasks()
console.log("jklsdf")
let projectList = [g1,g1];
console.log(projectList)

for (let i=0; i<g1.tasks.length; i++) {
    displayTask(g1.tasks[i])
}
// for (let i=0; i<projectList; i++) {
//     console.log("jklsdf")
//     // listProject(projectList[i]);

// }