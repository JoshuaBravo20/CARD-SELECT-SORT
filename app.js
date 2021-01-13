// DEFINIR TODOS LOS ELEMENTOS
let card = document.querySelector(".card");
let upSuit = document.querySelector(".up-suit");
let downSuit = document.querySelector(".down-suit");
let cardNumber = document.querySelector(".number");
let numInput = document.querySelector("#numLabel");
let drawBtn = document.querySelector("#draw");
let sortBtn = document.querySelector("#sort");
let resetBtn = document.querySelector("#reset");
let container = document.querySelector(".container");

let allCards = 0;
let cardArray = [];
let symbolArray = [];

let parentRow = document.querySelector("#parentRow");
let suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "K", "Q", "J"];

// DIBUJAR CADA CARTA
function drawCards() {
  //RANDOMIZAR ARRAYS DE TODOS LOS VALORES POSIBLES (1-9, K-Q-J), (spades, clubs, hearts, diamonds)
  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomNum = Math.floor(Math.random() * nums.length);
  //CREAR ELEMENTOS
  let newCard = document.createElement("div");
  let cardBody = document.createElement("div");
  let col = document.createElement("div");
  let newUpS = document.createElement("span");
  let newDownS = document.createElement("span");
  let newCardNum = document.createElement("span");

  let obj = {
    number: nums[randomNum],
    suits: suits[randomSuit]
  }
  //ASIGNAR LOS VALORES ALEATORIOS A CADA PARTE DE LA CARTA
  newUpS.innerHTML = obj.suits;
  newDownS.innerHTML = obj.suits;
  newCardNum.innerHTML = obj.number;
  //AGREGAR LAS CLASES, PARA ESTRUCTURA Y DETALLES VISUALES
  newCard.classList.add("card", "animate__animated", "animate__bounceIn");
  cardBody.classList.add("card-body");
  col.classList.add("col");
  newUpS.classList.add("up-suit");
  newDownS.classList.add("down-suit");
  newCardNum.classList.add("number");
  //ASIGNAR Y ESTRUCTURAR COMO SE GENERA LA CARTA EN EL DOM
  cardBody.appendChild(newUpS);
  cardBody.appendChild(newDownS);
  cardBody.appendChild(newCardNum);
  newCard.appendChild(cardBody);
  col.appendChild(newCard);
  parentRow.appendChild(col);
  // CREAR ARRAY CON VALORES PARA ORDENAR
  cardArray.push(obj);
}

// SE DIBUJA LA CANTIDAD QUE INGRESE EL USUARIO DESDE EL INPUT
drawBtn.addEventListener("click", () => {
  allCards = numInput.value;

  for (let i = 0; i < allCards; i++) {
    drawCards();
    numInput.value = "";
  }
});

// BOTON DE REINICIO
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

// BOTON PARA ORDENAR - ESTILO SELECT
sortBtn.addEventListener("click", function () {
  let n = cardArray.length;
      
  for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < n; j++){
          if(cardArray[j].number < cardArray[min].number) {
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = cardArray[i]; 
           cardArray[i] = cardArray[min];
           cardArray[min] = tmp;      
           drawSorted();
      }
  }
});

//FUNCION PARA DIBUJAR LOS ORDENADOS
function drawSorted() {

  let newRow = document.createElement("div");
  newRow.classList.add("row");
  container.appendChild(newRow);

  for (let i = 0; i < cardArray.length; i++) {
  
  let newCard = document.createElement("div");
  let cardBody = document.createElement("div");
  let col = document.createElement("div");
  let newUpS = document.createElement("span");
  let newDownS = document.createElement("span");
  let newCardNum = document.createElement("span");

  
  newCard.classList.add("card", "animate__animated", "animate__bounceIn");
  cardBody.classList.add("card-body");
  col.classList.add("col");
  newUpS.classList.add("up-suit");
  newDownS.classList.add("down-suit");
  newCardNum.classList.add("number");

  cardBody.appendChild(newUpS);
  cardBody.appendChild(newDownS);
  cardBody.appendChild(newCardNum);
  newCard.appendChild(cardBody);
  col.appendChild(newCard);
  newRow.appendChild(col);

  newCardNum.innerHTML = cardArray[i].number;
  newUpS.innerHTML = cardArray[i].suits;
  newDownS.innerHTML = cardArray[i].suits;
  }
}
