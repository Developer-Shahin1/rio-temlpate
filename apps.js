const menu=document.getElementById("menu");
const mobilemanu=document.getElementById("mobilemanu");
const closenav=document.getElementById("closenav");

menu.addEventListener("click", () => {
    mobilemanu.style.display=("block");
    menu.style.display=("none")
    closenav.style.display=("block")
});
closenav.addEventListener("click", () => {
    mobilemanu.style.display=("none");
    menu.style.display=("block")
    closenav.style.display=("none")
});



const solution=document.querySelector(".solution");


solution.forEach(solution => {
    solution.addEventListener("click", () =>{
        solution.classList.toggle("active");
    })
})





