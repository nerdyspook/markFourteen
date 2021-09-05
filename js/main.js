const initialPrice = document.querySelector("#initial");
const currentPrice = document.querySelector("#current");
const stocksQuantity = document.querySelector("#quantity");
const checkButton = document.querySelector("#btn-check");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        let loss = (initial - current) * quantity;
        let lossPercentage = ((loss/initial) * 100) / quantity;
        console.log(lossPercentage);
        console.log("loss");
        output.innerText = `Your Loss is ${loss} and Loss Percentage is ${lossPercentage}`;
    }
    else if(initial < current){
        let profit = (current - initial) * quantity;
        let profitPercentage = ((profit/initial) * 100) / quantity;
        console.log(profitPercentage);
        console.log("profit");
        output.innerText = `Your Profit is ${profit} and Profit Percentage is ${profitPercentage}`;
    }
    else{
        output.innerText = "Phew! Nothing to worry about";
    }
}

function clickHandler(){
    let initial = Number(initialPrice.value);
    let current = Number(currentPrice.value);
    let quantity = Number(stocksQuantity.value);
    
    calculateProfitAndLoss(initial, quantity, current);
}

checkButton.addEventListener("click", clickHandler);
