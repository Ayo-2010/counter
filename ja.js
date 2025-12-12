// let firstName = prompt("What is your first Name")
// let lastName = prompt(`${firstName} What is your last Name`)
// let age = prompt(`${firstName} ${lastName} How old are you`)
// let class1 = prompt(`${firstName} ${lastName} you are in what class`)
// let gender = prompt(`${firstName} ${lastName} Are you a male or a female`)

// let obj = {}

// obj["firstName1"] = firstName
// obj["lastName1"] = lastName
// obj["age1"] = age
// obj["class2"] = class1
// obj["gender1"] = gender

// console.log(obj);
// let li = document.remo
// let ol = document.getElementsByTagName("ol")
// li.innerHTML= "Tawwab is foolish"
// console.log(li);
// ol[0].appendChild(li)
// ol[0].removeChild(li[0])
// console.log(e.target.innerHTML);
let h1 = document.getElementsByTagName("h1")
let button = document.getElementsByTagName("button")
console.log(h1);
button[0].addEventListener("click", ()=>{
    let ha = h1[0].innerHTML 
    let haa = (Number(ha)) + 1
    h1[0].innerHTML = haa
    })
button[1].addEventListener("click", ()=>{
    console.log(h1[0].innerHTML);
    if ((h1[0].innerHTML) > 0) {
        let ha1 = h1[0].innerHTML 
        let haa1 = (Number(ha1))  - 1
        h1[0].innerHTML = haa1
    } else {
        alert("minimum number is 0")
    }
    })
button[2].addEventListener("click", ()=>{
    h1[0].innerHTML = 0
    }) 