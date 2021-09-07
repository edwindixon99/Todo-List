class Project {
    constructor(title) {
        this.id = title;
        this.title = title;
        this.tasks = [];
    }
  }

class Task {
    constructor(title, due, priority, desc) {
        this.title = title;
        this.id = title.replace(/\s/g, "");
        this.due = due;
        this.priority = priority;
        this.desc = desc;
    }
}

class ProjectList {
    constructor(){
        this.projects = [];
    }
}


export {ProjectList, Task, Project};