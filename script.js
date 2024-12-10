const cardArray = [
  {name: "fries",
   img: "https://i.postimg.cc/wvFfCGns/fries.png"
  },
  {name: "cheeseburger",
   img: "https://i.postimg.cc/nXJw2NrS/cheeseburger.png"
  },
  {name: "pizza",
   img: "https://i.postimg.cc/jD43FvJx/pizza.png"
  },
  {name: "hotdog",
   img: "https://i.postimg.cc/yWD58F2j/hotdog.png"
  },
  {name: "milkshake",
   img: "https://i.postimg.cc/fJXrxMz0/milkshake.png" 
  },
  {name: "ice-cream",
   img: "https://i.postimg.cc/HjFNcrgg/ice-cream.png"
  },
  {name: "fries",
   img: "https://i.postimg.cc/wvFfCGns/fries.png"
  },
  {name: "cheeseburger",
   img: "https://i.postimg.cc/nXJw2NrS/cheeseburger.png"
  },
  {name: "pizza",
   img: "https://i.postimg.cc/jD43FvJx/pizza.png"
  },
  {name: "hotdog",
   img: "https://i.postimg.cc/yWD58F2j/hotdog.png"
  },
  {name: "milkshake",
   img: "https://i.postimg.cc/fJXrxMz0/milkshake.png" 
  },
  {name: "ice-cream",
   img: "https://i.postimg.cc/HjFNcrgg/ice-cream.png"
  }
]

let chosenArray = [];
let chosenCardIds = [];
const cardsWon = [];
const result = document.getElementById("result");
let clicks = 0;

function shuffle(array){
  for(let i = array.length-1; i > 0; i--){
    const random = Math.round(Math.random() * (i+1));
    [array[i], array[random]] = [array[random], array[i]];
  }
};

cardArray.sort(shuffle(cardArray));
const gridDisplay = document.querySelector("#grid");

function board(){
  for(let i = 0; i < cardArray.length; i++){
    const card = document.createElement("img");
    card.setAttribute("src", "https://i.postimg.cc/0jk1PK8X/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard)
    gridDisplay.appendChild(card);
  };
}

board();

function flipCard(event){
  clicks++
  const cardId = this.getAttribute("data-id");
  chosenArray.push(cardArray[cardId].name);
  chosenCardIds.push(cardId)
  this.setAttribute("src", cardArray[cardId].img);
  if(chosenArray.length === 2){
    setTimeout(checkMatch, 500);
  }
}

function checkMatch(){
  const cards = document.querySelectorAll("img");
  const optionOneId = chosenCardIds[0];
  const optionTwoId = chosenCardIds[1];
  if(optionOneId == optionTwoId){
    cards[optionTwoId].setAttribute("src", "https://i.postimg.cc/cgbbcHtf/blank.png");
    alert("you clicked same card");
    clicks--
  }
  else if(chosenArray[0] == chosenArray[1]){
    cards[optionOneId].setAttribute("src", "https://i.postimg.cc/7CPt87gg/white.png");
    cards[optionTwoId].setAttribute("src", "https://i.postimg.cc/7CPt87gg/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(chosenArray);
    alert("It's a Match ");
  }
  else{
    cards[optionOneId].setAttribute("src", "https://i.postimg.cc/cgbbcHtf/blank.png");
    cards[optionTwoId].setAttribute("src", "https://i.postimg.cc/cgbbcHtf/blank.png");
    alert("Its not a match");
  }
  result.textContent = cardsWon.length;
  if(cardsWon.length === cardArray.length/2){
    result.textContent = `congratulations You Won after: ${clicks} clicks`;
  }
  chosenArray = [];
  chosenCardIds = [];
}