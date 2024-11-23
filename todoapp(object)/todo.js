let form = document.getElementById("form");
let arr = [];


form.addEventListener('submit', () => {
    displaytask(event)
})


function displaytask(event) {
    event.preventDefault();
    
    const taskName = document.getElementById('task').value;
    const priority = document.getElementById('priority').value;

    let student = {
        taskName: taskName,
        priority: priority,
    }
    arr.push(student);
    let store = JSON.stringify(student);
    let store1 = JSON.parse(store);
    console.log(store1);


    document.getElementById('task').value ="";
    document.getElementById('priority').value = "";
}