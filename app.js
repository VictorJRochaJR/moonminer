let cheese = 0;
let modifiers = 0
let collection = 0
let passiveCheese = 0

let clickUpgrades = {
    pickaxe: {
        price: 10,
        quantity: 0,
        multiplier: 2
    },
    dualWield: {
        price: 25,
        quantity: 0,
        multiplier: 3,
    }
};

let automaticUpgrades = {
    rovers: {
        price: 60,
        quantity: 0,
        multiplier: 20
    },
    miners: {
        price: 70,
        quantity: 0,
        multiplier: 22
    }
};


function mine() {
    cheese += 1
    cheese += modifiers
    cheese += passiveCheese
    console.log(cheese)
    update()
    //document.getElementById("buyPickaxe").innerHTML =
}


function update() {
    document.getElementById("moon").innerHTML
    document.getElementById("cheesecount").innerText = cheese

}

function buyPickaxe() {
    let modified = 0
    if (cheese >= 10) {
        cheese -= clickUpgrades.pickaxe.price
        clickUpgrades.pickaxe.quantity++
        clickUpgrades.pickaxe.multiplier += clickUpgrades.pickaxe.multiplier
        modifiers += clickUpgrades.pickaxe.multiplier
        clickUpgrades.pickaxe.price += clickUpgrades.pickaxe.price
        document.getElementById("pickaxe").innerText = clickUpgrades.pickaxe.quantity
        document.getElementById("pickaxeprice").innerText = clickUpgrades.pickaxe.price
        document.getElementById("pickaxemodifier").innerText = clickUpgrades.pickaxe.multiplier
    }


    update()

}


function buyDualWield() {
    let modified = 0
    if (cheese >= 25) {
        cheese -= clickUpgrades.dualWield.price
        clickUpgrades.dualWield.quantity++
        clickUpgrades.dualWield.multiplier += clickUpgrades.dualWield.multiplier
        modifiers += clickUpgrades.dualWield.multiplier
        clickUpgrades.dualWield.price += clickUpgrades.dualWield.price
        document.getElementById("dualwield").innerText = clickUpgrades.dualWield.quantity
        document.getElementById("dualwieldprice").innerText = clickUpgrades.dualWield.price
        document.getElementById("dualwieldmodifier").innerText = clickUpgrades.dualWield.multiplier
    }

    update()
}


function buyRovers() {
    let modified = 0
    if (cheese >= 60) {
        cheese -= automaticUpgrades.rovers.price
        automaticUpgrades.rovers.quantity++
        automaticUpgrades.rovers.multiplier += automaticUpgrades.rovers.multiplier
        passiveCheese += automaticUpgrades.rovers.multiplier
        automaticUpgrades.rovers.price += automaticUpgrades.rovers.price
        document.getElementById("rovers").innerText = automaticUpgrades.rovers.quantity
        document.getElementById("roversprice").innerText = automaticUpgrades.rovers.price
        document.getElementById("roversmodifier").innerText = automaticUpgrades.rovers.multiplier

    }
    intervals()
}

function buyMiners() {
    let modified = 0
    if (cheese >= 70) {
        cheese -= automaticUpgrades.miners.price
        automaticUpgrades.miners.quantity++
        automaticUpgrades.miners.multiplier += automaticUpgrades.miners.multiplier
        passiveCheese += automaticUpgrades.miners.multiplier
        automaticUpgrades.miners.price += automaticUpgrades.miners.price
        document.getElementById("miners").innerText = automaticUpgrades.miners.quantity
        document.getElementById("minersprice").innerText = automaticUpgrades.miners.price
        document.getElementById("minersmodifier").innerText = automaticUpgrades.miners.multiplier
    }
    interval()

}







function interval() {

    let collection = setInterval(autoUpgrades, 3000)
    update()
}

function autoUpgrades() {
    cheese += automaticUpgrades.miners.multiplier
    update()
}


function intervals() {
    let collection = setInterval(autoUpgradeRover, 3000)

    update()
}


function autoUpgradeRover() {
    cheese += automaticUpgrades.rovers.multiplier
    update()
}



