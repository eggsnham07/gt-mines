/**
 * 
 * @param {Boolean} is 
 * @param {JSON} data 
 */

function verify(is, data) {
    if(is == true) {
        for(var i=0;i+1<=data.vars.length;i++) {
            if(typeof data.vars[i] != data.type[i] && !String(data.type[i]).startsWith("~")) throw new TypeError(`Expected a ${data.type[i]}, got a ${typeof data.vars[i]}`)
        }
    } else {
        for(var i=0;i+1<=data.vars.length;i++) {
            if(typeof data.vars[i] == data.type[i] && !String(data.type[i]).startsWith("~")) throw new TypeError(`Expected anything but a ${typeof data.vars[i]}`)
        }
    }
}

/**
 * @param {Number} id 
 * @param {String} className 
 * @return {void}
 */

function newButton(id, className) {
    verify(true, {
        vars: [id, className],
        type: ["~string", "string"]
    })
    
    var newb = document.createElement("button")
    newb.className = className
    newb.id = id
    newb.onclick = button.data.func
    newb.textContent = "??"
    newb.style.color = "#44444400"
    document.getElementById("game").appendChild(newb)
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 */



const area = 64
const bombs = 8
const button = {
    data: { 
        className: "gamebutton",
        func: handler
    },
    createNew: newButton
}


console.log("Page ready!")
for(var i=1;i<=area;i++) {
    button.createNew(i, button.data.className)
}

for(var j=1;j<=bombs;) {
    var bomb = document.getElementById(randint(1, 64))
    if(bomb != null) {
        bomb.id="bomb"
        bomb.style.color = "#33333300"
        bomb.textContent = "??"
        j++
    }
}

//document.body.addEventListener("click", handler)

/**
 * 
 * @param {Event} e 
 * @return {void}
 */

function handler(e) {
    e.preventDefault()
    var target = e.target
    if(target.tagName != "BUTTON") return
    var val = Number(target.id)
    var but = document.getElementsByClassName("gamebutton")
    if(target.id == "bomb") {
        Array.prototype.forEach.call(but, (element) => {
            if(element.id == "bomb") {
                element.textContent = "X"
                element.style.color = "red"
            }
        })
        target.textContent = "X"
        target.style.color = "red"
        setTimeout(function() {
            location.reload()
        }, 2000)
    } else if(target.className == "gamebutton") {
        var b = 0
        if(val-2 >= 0 && but[val-2].id == "bomb") {
            b++
        }
        if(val >= 0 && val != 64 && but[val].id == "bomb") {
            b++
        }
        if(val+7 <= 63 && but[val+7].id == "bomb") {
            b++
        }
        if(val+6 <= 63 && but[val+6].id == "bomb") {
            b++
        }
        if(val+8 <= 63 && but[val+8].id == "bomb") {
            b++
        }
        if(val-9 >= 0 && but[val-9].id == "bomb") {
            b++
        }
        if(val-10 >= 0 && but[val-10].id == "bomb") {
            b++
        }
        if(val-8 >= 0 && but[val-8].id == "bomb") {
            b++
        }

        if(notBomb(val+1)) unlock(val+1)
        if(notBomb(val-1)) unlock(val-1)
    }

    target.textContent = b
    target.style.color = "#333"
    target.id = "clicked"
    
    if(b == 0) target.style.backgroundColor = "lightgreen"
    if(b == 1) {
        target.style.backgroundColor = "lightgreen"
    }
    if(b == 2) {
        target.style.backgroundColor = "yellow"
    }
    if(b == 3) {
        target.style.backgroundColor = "lightcoral"
    }
    if(b == 4) {
        target.style.backgroundColor = "red"
    }
    if(b == 5) {
        target.style.backgroundColor = "brickred"
    }

    var bot = 0
    Array.prototype.forEach.call(but, (el) => {
        console.log(el.id)
        if(el.id != "bomb" && el.id != "clicked") {
            bot++
        }
    })
    if(bot == 0) {
        Array.prototype.forEach.call(but, (el) => {
            if(el.id == "bomb") {
                el.textContent = "X"
                el.style.color = "red"
            }
        })
        setTimeout(function() {
        document.getElementById("top").innerHTML = "You win!, press reload to play again."
        }, 400)
    } else {
        console.log("Not yet...")
    }
}

/**
 * 
 * @param {Number} id 
 * @returns {Boolean}
 */
function notBomb(id) {
    if(document.getElementById(id) != null) {
        return true
    } else {
        return false
    }
}

/**
 * 
 * @param {Number} id 
 */
function unlock(id) {
    document.getElementById(id).click()
}