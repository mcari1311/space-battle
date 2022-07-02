# space-battle

Description 

The goal of this project was to create an interactive space battle game. The user is the US Spaceship and the Alien Spaceship is automatic. 

Brief Example

function restartGame() {
    alienHealth = Math.round(Math.random() * (6 - 3 + 1) + 3)
    usHealth = 20
    let usHpWidth = (usHealth/20)*180
        usHp.style.width = usHpWidth + "px"

    let alienHpWidth = (alienHealth/alienHealth)*180
        alienHp.style.width = alienHpWidth + "px"
            
    usMoves.style.visibility = "visible"
    beginBattle();
}


List of Features

A homepage that laods into the game area when the start button is clicked. With each click on the blast button, an atack is launched and scores update automatically.

List of Technology Used

javascipt
html
css


Contribution Guidelines 