
const CAKE = document.getElementById('cake');
const POWERS = document.getElementById('power-ups').querySelectorAll('button');
const BUYERS = document.getElementById('buyers').querySelectorAll('button');

const CAKESTOCK = document.getElementById('cake-stock');
const MONEY = document.getElementById('money');

let cakeStock = parseInt(CAKESTOCK.getAttribute('data-cake-stock'));
let money = parseInt(MONEY.getAttribute('data-money'));

let clickPower = 1;

document.addEventListener('DOMContentLoaded', () => {
    CAKE.addEventListener('click', cakeClick);
    POWERS.forEach(power => power.addEventListener('mouseenter', showPowerDescription));
    POWERS.forEach(power => power.addEventListener('mouseleave', removePowerDescription));
    POWERS.forEach(power => power.addEventListener('click', powerUp));
    BUYERS.forEach(buyer => buyer.addEventListener('click', buyingCake));
});

function cakeClick() {
    cakeStock += clickPower;
    updateCurrency();
}

function showPowerDescription(handleHover) {
    const power = handleHover.target;
    const description = document.getElementById('power-description');
    const cost = document.getElementById('power-cost');

    description.textContent = power.getAttribute('data-description');
    cost.textContent = "Cost: " + power.getAttribute('data-cost') + " cakes";

    description.classList.remove('display');
    cost.classList.remove('display');
}

function removePowerDescription(handleHover) {
    const description = document.getElementById('power-description');
    const cost = document.getElementById('power-cost');
    
    description.classList.add('display');
    cost.classList.add('display');
}

function powerUp(handleClick) {
    const power = handleClick.target;
    let cost = parseInt(power.getAttribute('data-cost'))

    if (money < cost) {
        noMoney();
        return;
    }

    money -= cost;
    updateCurrency();

    let active = document.getElementById('active');
    if (active != null)
        active.id = '';

    power.id = 'active';
    clickPower = parseInt(power.getAttribute('data-multiplier'));
}

function buyingCake(handleClick) {
    const buyer = handleClick.target;
    let wants = parseInt(buyer.getAttribute('data-wants'))

    if (cakeStock < wants) {
        noMoney();
        return;
    }

    let pays = parseInt(buyer.getAttribute('data-pays'))
    let cooldown = parseInt(buyer.getAttribute('data-cooldown'))

    cakeStock -= wants;
    money += pays;
    updateCurrency();

    buyer.classList.add('cooldown')
    buyer.disabled = true;
    setTimeout(() => {
        buyer.classList.remove('cooldown')
        buyer.disabled = false;
    }, cooldown * 1000);
}

function noMoney() {
    const noMoney = document.getElementById('no-money');
    noMoney.classList.remove('display');
    CAKE.classList.add('display');

    setTimeout(() => {
        noMoney.classList.add('display');
        CAKE.classList.remove('display');
    }, 500);
}

function updateCurrency() {
    CAKESTOCK.textContent = cakeStock;
    MONEY.textContent = money;
}
