"use strict";

document.querySelector(".btn").onclick = function () {

    if(document.querySelector("#newtask input").value.length == 0) {
        alert("Please Enter a Task")
    } 
    
    else {
        document.querySelector("#task").innerHTML 
        += `
        <div class="task">
            <span id="taskname">
            ${document.querySelector(".input").value}
            </span>
            <button class="delete">
            <i class="material-icons">cancel</i>
            </button>
        </div>
        `;
        let currentTask = document.querySelectorAll(".delete");
        for(let i = 0; i < currentTask.length; i++) {
            currentTask[i].addEventListener("click", function() {
                this.parentNode.remove();
    });
}
        let tasks = document.querySelectorAll(".task");
        for(let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener("click", function() {
                this.classList.toggle('completed');
            });
        }

        document.querySelector("#newtask input").value = "";
    }
}