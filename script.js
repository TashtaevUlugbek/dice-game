let nameOne = document.querySelector(".name1")
let nameTwo = document.querySelector(".name2")
let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")
let smth1 = 0;
let smth2 = 0;
let end = prompt("До скольки играть будем?")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let win1 = document.querySelector("#win1")
let win2 = document.querySelector("#win2")
const equal = document.querySelector(".equal")
let btn = document.querySelector(".btn")
let cube1 = document.querySelector(".cube1")
let cube2 = document.querySelector(".cube2")
let name1 = prompt("Enter name of first player")
let name2 = prompt("Enter name of second player")
alert("Press Enter")
document.addEventListener("keydown" , (e)=>{
    if(e.key == "Enter"){
        if(name1 == "" && name2 == ""){
            name1 = "You didnt enter name"
            name2 = "You didnt enter name"
            nameOne.innerHTML = name1
            nameTwo.innerHTML = name2
        }
        else if (name1 != "" && name2 == ""){
            nameOne.innerHTML = name1
            name2 = "You didnt enter name"
            nameTwo.innerHTML = name2
        }
        else if (name2 != "" && name1 == ""){
            nameTwo.innerHTML = name2
            name1 = "You didnt enter name"
            nameOne.innerHTML = name2
        }
        else{   
            nameOne.innerHTML = name1
            nameTwo.innerHTML = name2
        }
        
        
    }
})
btn.addEventListener("click" , ()=>{
    let score11 = Math.ceil(Math.random()*6)
    let score22 = Math.ceil(Math.random()*6)
    console.log(score11);
    console.log(score22);
    score1.innerHTML = score11
    score2.innerHTML = score22
    cube1.setAttribute("src" , `/Images/${score11}.png`)
    cube2.setAttribute("src" , `/Images/${score22}.png`)
    if(score11>score22){
        smth1++
        one.innerHTML = smth1
        win1.style.cssText = "display: flex;"
        win2.style.cssText = "display: none;"
        equal.style.cssText = "display:none;"
    }
    else if (score22 > score11){
        smth2++
        two.innerHTML = smth2
        win2.style.cssText = "display: flex;"
        win1.style.cssText = "display: none;"
        equal.style.cssText = "display:none;"

    }
    else{
        equal.style.cssText = "display:flex;"
        win1.style.cssText = "display: none;"
        win2.style.cssText = "display: none;"
    }
    if(smth1 == end && smth1>smth2){
        location.href = "winner1.html"
    }
    else if (smth2 == end && smth2>smth1){
        location.href = "winner1.html"
    }
})