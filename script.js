let bottomRow = document.getElementById('bottomRow')
let stats = document.querySelectorAll('.stats')
let usStats = document.getElementById('usStats')
let alienStats = document.getElementById('alienStats')
let usHp = document.getElementById('usHp')
let alienHp = document.getElementById('alienHp')
let usMoves = document.getElementById('usMoves')

let alienHealth = 100
let usHealth = 100

function beginBattle() {
bottomRow.innerHTML = "Click the button to hit"
    for (let i=0; i<stats.length; i++) {
        stats[i].style.visibility = "visible"
    }

}

function alienAttack() {
    let hitChancee = Math.round(Math.random() * 10)
        if (hitChancee <=7) {
            let dmg = Math.round(Math.random()*10) + 10
            usHealth -= dmg
            if (usHealth < 0) {
                usHealth = 0;
            }
            bottomRow.innerHTML += "<br> You've been hit by the aliens. The damage was " + dmg + "!" + " You now have " + usHealth + " left!"
            let usHpWidth = (usHealth/100)*180
            usHp.style.width = usHpWidth + "px"
        } else {
            bottomRow.innerHTML += "<br> The aliens missed!"
        }
        if (usHealth == 0) {
            bottomRow.innerHTML += "<br> You've been defeated <br><button onclick='restartGame()'>Play again?</button>"
            usMoves.style.visibility = "hidden"

        }
}


function blast() {
    let hitChance = Math.round(Math.random() * 10)
        if (hitChance <=7) {
            let dmg = Math.round(Math.random()*10) + 10
            alienHealth -= dmg
            if (alienHealth < 0) {
                alienHealth = 0;
            }
            bottomRow.innerHTML = "You hit the aliens with your blast! Your damage was " + dmg + "!" + " Their ship now has " + alienHealth + " left!"
            let alienHpWidth = (alienHealth/100)*180
            alienHp.style.width = alienHpWidth + "px"
        } else {
            bottomRow.innerHTML = "You missed!"
        }
        if (alienHealth == 0) {
            bottomRow.innerHTML = "You've won! <br> <button onclick='restartGame()'>Play again?</button>"
            usMoves.style.visibility = "hidden"
        } else {
            alienAttack()
        }
}

function restartGame() {
    alienHealth = 100
    usHealth = 100
    let usHpWidth = (usHealth/100)*180
        usHp.style.width = usHpWidth + "px"

    let alienHpWidth = (alienHealth/100)*180
        alienHp.style.width = alienHpWidth + "px"
            
    usMoves.style.visibility = "visible"
    beginBattle();
}