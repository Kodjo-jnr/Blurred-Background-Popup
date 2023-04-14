const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popunContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");


btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popunContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popunContainerEl.classList.add("active");
});