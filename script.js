const name = prompt("Digite Seu Nome: ")
const p = document.querySelector("p")
let humanScore = document.querySelector("#human-score")
let machineScore = document.querySelector("#machine-score")

let humanScorenumber = 0
let machineScorenumber = 0

const playhuman = (humanchoice) => {
    playTheGame(humanchoice, playmachine())
}

const playmachine = () => {
    const choices = ['rock', 'paper', 'tesoura']
    const randomnumber = Math.floor(Math.random() * 3)

    console.log(randomnumber)

    return choices[randomnumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano:" + human + "Maquina:" + machine)

    if (human === machine) {
        p.innerHTML = "Deu Empate!"
    } else if (human === "paper" && machine === "rock" || human === "rock" && machine === "tesoura" || human === "tesoura" && machine === "paper") {
        humanScorenumber++
        humanScore.innerHTML = humanScorenumber
        p.innerHTML = "GG. Você Ganhou!"
    } else {
        machineScorenumber++
        machineScore.innerHTML = machineScorenumber
        p.innerHTML = "Foi De F Meu Amigo. Perdeu Para A Alexa."
    }
}