//Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let cart = new Set();
let productList = [];
let Grandtotal=0.0;

//Cart objects from the homework sheet 
let Roll1 = new Roll("Original", "Sugar Milk", 1, 2.49);
let Roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
let Roll3 = new Roll("Raisin", "Sugar Milk", 3,  2.99);
let Roll4 = new Roll("Apple", "Original", 3, 3.49);

productList.push(Roll1, Roll2, Roll3, Roll4);

//Glaze class
class Glaze {
    glazetype;
    glazeprice;

    constructor(glazetype, glazeprice) {
        this.glazetype = glazetype;
        this.glazeprice = glazeprice;
    }
}

//glazing object
const keeporiginal = new Glaze("Keep Original", 0);
const sugarmilk = new Glaze("Sugar Milk", 0);
const vanillamilk = new Glaze("Vanilla Milk", 0.50);
const doublechocolate = new Glaze("Double Chocolate", 1.50);

//pack constructor
class Packs {
    packsize;
    packprice;

    constructor(packsize, packprice) {
        this.packsize = packsize;
        this.packprice = packprice;
    }
}
//pack object
const onepack = new Packs(1, 1);
const threepack = new Packs(3, 3);
const sixpack = new Packs(6, 5);
const twelvepack = new Packs(12, 10);

let allglazes = [keeporiginal, sugarmilk, vanillamilk, doublechocolate];
let allpacks = [onepack, threepack, sixpack, twelvepack];

//function to calculate price
function calculatetotalprice(basePrice, rollGlazing, packPrice) {
    return ((basePrice + rollGlazing) * packPrice)
}

//looping for the template: Updating product info, price, total
for (let i = 0; i < productList.length; i++) {

    let newRoll = productList[i];
    cart.add(newRoll);

    let cartitem = document.getElementsByTagName("template")[0];
    let cartitemClone = cartitem.content.cloneNode(true);

    cartitemClone.querySelector(".rollname").innerText = productList[i].type + " Cinnamon Roll";
    cartitemClone.querySelector(".glazename").innerText = "Glazing: " + productList[i].glazing;
    cartitemClone.querySelector(".pack-size").innerText = "Pack Size: " + productList[i].size;

    cartitemClone.querySelector(".cart-image").src = rolls[productList[i].type].imageFile;
    
    let glazingprice;
    let packPrice = allpacks.find(item => item.packsize == productList[i].size).packprice

    //condition for price
    if(productList[i].glazing == "Original"){
        glazingprice = keeporiginal.glazeprice;
    }
    else{
        glazingprice = allglazes.find(item => item.glazetype == productList[i].glazing).glazeprice;
    }

    let x = (calculatetotalprice(productList[i].basePrice,glazingprice,packPrice)).toFixed(2);
    finalTotal= "$ "+ x;

    cartitemClone.querySelector(".cart-text2").innerText = finalTotal;

    Grandtotal = Grandtotal + parseFloat(x);

    document.querySelector(".cart-text-final").innerText = "$ " + Grandtotal;
    let c = cartitemClone.querySelector(".cart1-product")

    //remove button
    cartitemClone.querySelector("button").onclick = (() => {
        c.remove();
        let rPrice = c.querySelector(".cart-text2").innerText.slice(2);
        let rTotal = document.querySelector(".cart-text-final").innerText.slice(2);
        document.querySelector(".cart-text-final").innerText = "$ "+ (rTotal-rPrice).toFixed(2);
        cart.delete(newRoll);
        console.log(cart);
})


    document.querySelector(".Product-list").appendChild(cartitemClone);

}


