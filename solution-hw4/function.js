//glazing constructor
class Glaze {
  glazetype;
  glazeprice;

  constructor(glazetype,glazeprice){
    this.glazetype=glazetype;
    this.glazeprice=glazeprice;  
}
}

//glazing object
const keeporiginal = new Glaze ("Keep Original",0);
const sugarmilk = new Glaze ("Sugar Milk",0);
const vanillamilk = new Glaze ("Vanilla milk", 0.50);
const doublechocolate = new Glaze ("Double chocolate", 1.50);

//pack constructor
class Packs {
  packsize;
  packprice;

  constructor (packsize, packprice){
    this.packsize=packsize;
    this.packprice=packprice;
  }
}
//pack object
const onepack= new Packs(1,1);
const threepack= new Packs(3,3);
const sixpack= new Packs(6,5);
const twelvepack= new Packs(12,10);

//array for glaze and pack objects
let allglazes=[keeporiginal, sugarmilk, vanillamilk, doublechocolate];
let allpacks=[onepack,threepack,sixpack,twelvepack];

let glazeoptions=document.getElementById("glazing");

//loop for glaze dropdown
for (i = 0; i < allglazes.length; i++) {
  let glazeoptionitem = document.createElement("option") ;
  glazeoptionitem.innerText = allglazes[i].glazetype;
  glazeoptions.appendChild(glazeoptionitem);
}

//loop for packsize dropdown
let packoptions = document.getElementById("packsize");
for (i = 0; i<allpacks.length; i++) {
  let packoptionitem = document.createElement ("option");
  packoptionitem.textContent = allpacks[i].packsize;
  packoptions.appendChild(packoptionitem);
}

let glazechoice = 0;
let packchoice = 1;

//function to change the price
function calculatePrice(element)
{
  let baseprice = rolls[rollType].basePrice;
  let finalprice=0;

  const pricechange=element.value;

  for(i=0;i<allglazes.length;i++){
    if(allglazes[i].glazetype==element.value){
      glazechoice=allglazes[i].glazeprice;
    }
  }

  

  for(i=0;i<allpacks.length;i++){
    if(allpacks[i].packsize==element.value){
      packchoice=allpacks[i].packprice;
    }
  }

  finalprice=parseFloat((baseprice + glazechoice)*packchoice).toFixed(2);

  document.getElementById("finalprice").innerHTML= "$ " + finalprice;
  
}

//Homework-4//

let cart=[];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");


document.querySelector(".cin-heading").innerText=rollType + " Cinnamon Roll";
document.querySelector(".card-total").innerText= rolls[rollType].basePrice;
document.querySelector(".product-gallery-image").src= rolls[rollType].imageFile;

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

//Function to add item to the cart //
function AddtoCart(){
  let r = new Roll(rollType,glazeoptions.value,packoptions.value,rolls[rollType].basePrice);
  cart.push(r);
  console.log(cart);

}