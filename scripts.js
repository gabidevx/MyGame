let bani = 0;
let moneygain = 1;
let upgrades = 0;
let cost = 10;
let passiveCost = 10;
let passiveGeneration = 1;
let passiveUpgrades = 0;
let savedOnce = 0;
let tip = 0;
function addMoney() {
    bani = bani + moneygain;
    document.getElementById("money").textContent = "Oxigen: " + bani;

    if (tip == 0) {
        document.getElementById("tips").textContent = "Tip: cumpara un upgrade";
        tip = 1;
    }

    document.getElementById("money").style.transform = "scale(1.2)";
    document.getElementById("money").style.transition = "transform 0.15s ease";
    setTimeout(() => {
        document.getElementById("money").style.transform = "scale(1)";
    }, 200);

    document.getElementById("clickImage").style.transform = "scale(1)";
    document.getElementById("clickImage").style.transition = "transform 0.15s ease";
    setTimeout(() => {
        document.getElementById("clickImage").style.transform = "scale(0.9)";
    }, 200);
}

function upgradeClick() {

    if (bani >= cost) {
        moneygain = moneygain + 1;
        bani = bani - cost;
        upgrades++;
        cost = cost + 10;

        if (tip == 1) {
            tip = 2;
            document.getElementById("tips").style.display = "none";
        }

        document.getElementById("money").textContent = "Oxigen: " + bani;

        document.getElementById("money").style.transform = "scale(1.2)";
        document.getElementById("money").style.transition = "transform 0.15s ease";
        setTimeout(() => {
            document.getElementById("money").style.transform = "scale(1)";
        }, 200);

        document.getElementById("upgs").textContent = "Upgrade: " + upgrades;
        document.getElementById("cost").textContent = "Cost: " + cost;
        document.getElementById("perClick").textContent = "+" + moneygain + " on click";
        document.getElementById("perClick").style.transform = "scale(1.2)";
        document.getElementById("perClick").style.transition = "transform 0.15s ease";
        setTimeout(() => {
            document.getElementById("perClick").style.transform = "scale(1)";
        }, 200);

    }
    else {
        let missing = cost - bani;
        alert("You are missing money " + missing + " oxigen!");
    }
}

function upgradePassive() {
    if (bani >= passiveCost) {
        bani -= passiveCost;
        passiveCost += 10;
        passiveUpgrades++;
        passiveGeneration++;

        if (tip == 1) {
            tip = 2;
            document.getElementById("tips").style.display = "none";
        }

        document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
        document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
        document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;

        document.getElementById("freeMoney").style.transform = "scale(1.2)";
        document.getElementById("freeMoney").style.transition = "transform 0.15s ease";
        setTimeout(() => {
            document.getElementById("freeMoney").style.transform = "scale(1)";
        }, 200);

    }
    else {
        let missing = passiveCost - bani;
        alert("You are missing money " + missing + " oxigen!");
    }
}

function saveData() {

    if (savedOnce == 0) {
        alert("Data a fost salvata");
        savedOnce = 1;
    }
    else {
        alert("Data a fost reactualizata!");
    }

    localStorage.setItem("baniSalvati", bani);
    localStorage.setItem("moneygain", moneygain);
    localStorage.setItem("clickUpgrades", upgrades);
    localStorage.setItem("clickCost", cost);
    localStorage.setItem("passivecost", passiveCost);
    localStorage.setItem("passiveGen", passiveGeneration);
    localStorage.setItem("passiveUpg", passiveUpgrades);
    localStorage.setItem("savedAtLeastOnce", savedOnce);
    localStorage.setItem("tipshow", tip);
}
function loadData() {
    if (savedOnce == 0) {
        alert("Nu exista data salvata!");
    }
    else {
        bani = parseInt(localStorage.getItem("baniSalvati") || 0);
        moneygain = parseInt(localStorage.getItem("moneygain") || 1);
        upgrades = parseInt(localStorage.getItem("clickUpgrades") || 0);
        cost = parseInt(localStorage.getItem("clickCost") || 10);
        passiveCost = parseInt(localStorage.getItem("passivecost") || 10);
        passiveGeneration = parseInt(localStorage.getItem("passiveGen") || 1);
        passiveUpgrades = parseInt(localStorage.getItem("passiveUpg") || 0);
        tip = parseInt(localStorage.getItem("tipshow") || 0);

        document.getElementById("upgs").textContent = "Upgrades: " + upgrades;
        document.getElementById("cost").textContent = "Cost: " + cost;
        document.getElementById("money").textContent = "Oxigen: " + bani;
        document.getElementById("perClick").textContent = "+" + moneygain + " on click";
        document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
        document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
        document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;

        alert("Data loaded!");
    }
}

function autoLoadData() {
    if (savedOnce == 1) {
        bani = parseInt(localStorage.getItem("baniSalvati") || 0);
        moneygain = parseInt(localStorage.getItem("moneygain") || 1);
        upgrades = parseInt(localStorage.getItem("clickUpgrades") || 0);
        cost = parseInt(localStorage.getItem("clickCost") || 10);
        passiveCost = parseInt(localStorage.getItem("passivecost") || 10);
        passiveGeneration = parseInt(localStorage.getItem("passiveGen") || 1);
        passiveUpgrades = parseInt(localStorage.getItem("passiveUpg") || 0);
        tip = parseInt(localStorage.getItem("tipshow") || 0);

        document.getElementById("upgs").textContent = "Upgrades: " + upgrades;
        document.getElementById("cost").textContent = "Cost: " + cost;
        document.getElementById("money").textContent = "Oxigen: " + bani;
        document.getElementById("perClick").textContent = "+" + moneygain + " on click";
        document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
        document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
        document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;
    }
}
function autoSave() { 
    savedOnce = 1;
    localStorage.setItem("baniSalvati", bani);
    localStorage.setItem("moneygain", moneygain);
    localStorage.setItem("clickUpgrades", upgrades);
    localStorage.setItem("clickCost", cost);
    localStorage.setItem("passivecost", passiveCost);
    localStorage.setItem("passiveGen", passiveGeneration);
    localStorage.setItem("passiveUpg", passiveUpgrades);
    localStorage.setItem("savedAtLeastOnce", savedOnce);
    localStorage.setItem("tipshow", tip);

}

function resetData() {
    bani = 0;
    moneygain = 1;
    upgrades = 0;
    cost = 10;
    passiveCost = 10;
    passiveGeneration = 1;
    passiveUpgrades = 0;
    savedOnce = 0;
    tip = 0;

    localStorage.setItem("baniSalvati", bani);
    localStorage.setItem("moneygain", moneygain);
    localStorage.setItem("clickUpgrades", upgrades);
    localStorage.setItem("clickCost", cost);
    localStorage.setItem("passivecost", passiveCost);
    localStorage.setItem("passiveGen", passiveGeneration);
    localStorage.setItem("passiveUpg", passiveUpgrades);
    localStorage.setItem("savedAtLeastOnce", savedOnce);
    localStorage.setItem("tipshow", tip);

    document.getElementById("upgs").textContent = "Upgrades: " + upgrades;
    document.getElementById("cost").textContent = "Cost: " + cost;
    document.getElementById("money").textContent = "Oxigen: " + bani;
    document.getElementById("perClick").textContent = "+" + moneygain + " on click";
    document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
    document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
    document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;
    document.getElementById("tips").style.display = "block";
    document.getElementById("tips").textContent = "Tip: apasa pe copac";

    alert("Totul a fost resetat.")
}
function passiveGen() {
    bani = bani + passiveGeneration;
    document.getElementById("money").textContent = "Oxigen: " + bani;
    document.getElementById("money").style.transform = "scale(1.2)";
    document.getElementById("money").style.transition = "transform 0.15s ease";
    setTimeout(() => {
        document.getElementById("money").style.transform = "scale(1)";
    }, 200);
}

window.onload = () => {
    savedOnce = parseInt(localStorage.getItem("savedAtLeastOnce") || 0);
    autoLoadData();
    if (tip == 0) {
        document.getElementById("tips").textContent = "Tip: apasa pe copac";
    }
    if (tip == 1) {
        document.getElementById("tips").textContent = "Tip: cumpara un upgrade";
    }
    if (tip == 2) {
        document.getElementById("tips").style.display = "none";
    }
    setInterval(passiveGen, 1000); //1s
    setInterval(autoSave, 1000); //1s
}
