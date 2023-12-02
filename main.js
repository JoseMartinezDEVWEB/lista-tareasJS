
let idCounter =0;
const input = document.querySelector('input[type="text"]')

userInput.addEventListener('submit', (event) => {
    event.preventDefault()
    //console.log('se ha ejecutado el evento')
    addTask();
})

let addTask = () => {
    idCounter++;
    //console.log('evento desde la funcion flecha (capture)')
//para captura el texto escrito en el input principal
    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="${idCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
    <img src="borrar.png" class="closeBtn">
</div>`

    input.value = '';
    updateStats();
}

list.addEventListener('click', (event) => {
    //console.log(event.srcElement.nodeName )
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats()
    } else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id)
    }

})

let updateStats = () => {
    let element = list.querySelectorAll('div')
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} completadas: ${checkbox.length}</P>`
}

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id)
    list.removeChild(taskToDelete)
    updateStats()
}
































