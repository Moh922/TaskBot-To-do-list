const myEvent = document.querySelector('.detail-1')
const eventsDetails = document.querySelector('.event-det');

    myEvent.addEventListener("click", () => {
   eventsDetails.classList.toggle("active");
})


const myTask = document.querySelector('.event_2')
const taskDetails = document.querySelector('.task-det');

    myTask.addEventListener("click", () => {
   taskDetails.classList.toggle("active");
})

const Task = document.querySelector('.event_3')
const seconTaskDetails = document.querySelector('.task-det');

    Task.addEventListener("click", () => {
   seconTaskDetails.classList.toggle("active");
})
// Making Menubar work
const menuBar = document.querySelector('.menubar');
menuBarList = document.querySelector('.menubar-list');

menuBar.addEventListener("click", () => {
    menuBarList.classList.toggle("active");
});
