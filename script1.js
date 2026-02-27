let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let winPara = document.querySelector(".Winpara");
let reStartbtn = document.querySelector(".reStart");
let gamebtns = document.querySelector(".game");
let container = document.querySelector(".container")
container.style.backgroundColor = "blue";
let turn0 = true;

const winningPatern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
            container.style.backgroundColor = "#cc9748ff";
            box.style.color = "#754496ff";
            
            
        } else {
            box.innerText = "X";
            turn0 = true;
            container.style.backgroundColor = "#88ddd9ff";
            box.style.color = "#b18409ff";

        }
        checkWinner();
    })
});

resetbtn.addEventListener("click", () =>{
         enableablebtn();
})

let disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enableablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


let reset = () => {

}
const checkWinner = () => {
    for (let patern of winningPatern) {
        let par1val = boxes[patern[0]].innerText;
        let par2val = boxes[patern[1]].innerText;
        let par3val = boxes[patern[2]].innerText;
        if (par1val != "" && par2val != "" && par3val != "") {
            if (par1val === par2val && par2val === par3val) {
                winPara.innerText = `Winner is ${par1val}`
                winmsg();
                 disablebtn();

            }
        }
    }
}

const winpararestart = () =>{
winPara.classList.add("hide");
reStartbtn.classList.add("hide");
}
winpararestart();

    reStartbtn.addEventListener("click", () => {
       turn0 = true;
       gamebtns.classList.remove("hide");
       resetbtn.classList.remove("hide");
       reStartbtn.classList.add("hide");
       winPara.classList.add("hide");
       enableablebtn();
    // container.style.backgroundColor = "white";
    })



let winmsg = () => {
    winPara.classList.remove("hide");
    reStartbtn.classList.remove("hide");
    gamebtns.classList.add("hide");
    resetbtn.classList.add("hide");
    container.style.backgroundColor = "black";
    
}