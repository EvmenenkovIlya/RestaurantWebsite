let count = 0;
const text = document.getElementById("get-started").innerHTML;
let cardsContainer = document.querySelector(".cards-container");

const cards = [
  {
    id: 1,
    img : "./assets/salmon.png",
    name: "Salmon",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "7.10"
  },
  {
    id: 2,
    img : "./assets/french-fries.png",
    name: "French Fries",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.30"
  },
  {
    id: 3,
    img : "./assets/noodles.png",
    name: "Noodles",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.20"
  },
  {
    id: 4,
    img : "./assets/bowl.png",
    name: "Bowl",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "6.50"
  },
  {
    id: 5,
    img : "./assets/noodles.png",
    name: "Pasta",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "3.90"
  },
  {
    id: 6,
    img : "./assets/pizza.png",
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.99"
  },
  {
    id: 7,
    img : "./assets/salmon.png",
    name: "York Vega",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.10"
  },
  {
    id: 8,
    img : "./assets/another-bowl.png",
    name: "Another-bowl",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.75"
  },
  {
    id: 9,
    img : "./assets/salmon.png",
    name: "Salmon",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "7.10"
  },
  {
    id: 10,
    img : "./assets/french-fries.png",
    name: "French Fries",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.30"
  },
  {
    id: 11,
    img : "./assets/noodles.png",
    name: "Noodles",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.20"
  },
  {
    id: 12,
    img : "./assets/bowl.png",
    name: "Bowl",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "6.50"
  },
  {
    id: 13,
    img : "./assets/noodles.png",
    name: "Pasta",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "3.90"
  },
  {
    id: 14,
    img : "./assets/pizza.png",
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.99"
  },
  {
    id: 15,
    img : "./assets/salmon.png",
    name: "York Vega",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.10"
  },
  {
    id: 16,
    img : "./assets/another-bowl.png",
    name: "Another-bowl page 2",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.75"
  },
  {
    id: 17,
    img : "./assets/salmon.png",
    name: "Salmon",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "7.10"
  },
  {
    id: 18,
    img : "./assets/french-fries.png",
    name: "French Fries",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.30"
  },
  {
    id: 19,
    img : "./assets/noodles.png",
    name: "Noodles",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.20"
  },
  {
    id: 20,
    img : "./assets/bowl.png",
    name: "Bowl",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "6.50"
  },
  {
    id: 21,
    img : "./assets/noodles.png",
    name: "Pasta",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "3.90"
  },
  {
    id: 22,
    img : "./assets/pizza.png",
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.99"
  },
  {
    id: 23,
    img : "./assets/salmon.png",
    name: "York Vega",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.10"
  },
  {
    id: 24,
    img : "./assets/another-bowl.png",
    name: "Another-bowl page 3",
    description: "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.75"
  },
]

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getStarted() {
    let el = document.getElementById("get-started");
    count += 1;
    el.innerHTML = `${text} ${count}`;
    el.style.backgroundColor = getRandomColor();
}

function showMenu() {
  let el = document.querySelector("nav");
  el.classList.toggle("unvisible");
}

function createCards(start) {
  const cardsForRender = cards.filter((item, i) => ( i >= ((start - 1) * 8)  && i < start * 8));
  const renderCards = cardsForRender.map( item => `
  <div class="card-item">
    <img src=${item.img} class="food-img" />
    <div class="stars">
      <i class="fa-solid fa-star fill"></i>
      <i class="fa-solid fa-star fill"></i>
      <i class="fa-solid fa-star fill"></i>
      <i class="fa-solid fa-star fill"></i>
      <i class="fa-solid fa-star"></i>
    </div>
    <p class="item-name">${item.name}</p>
    <p class="item-description">
      ${item.description}
    </p>
    <div class="info">
      <p class="price">$${Number(item.price) + start}</p>
      <div class="card-buttons">
        <img src="./assets/shopping-basket-btn.svg"/>
        <img src="./assets/share-btn.svg"/>
      </div>
    </div>
  </div>`
  );
  return renderCards;
}

function renderCards(start) {
  const cardsToRender = createCards(start); 
  cardsToRender.forEach(element => {
    const newCard = document.createElement('div');
    cardsContainer.appendChild(newCard);
    newCard.outerHTML = element;
  });
}

function clearActivePagination() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(element => {
    element.classList.remove('active')
  });
}

function clearOldCards() {
  cardsContainer.replaceChildren();
}

function getPageWithNumber() { 
  clearActivePagination();
  var activeButton = event.target;
  activeButton.classList.add('active');
  clearOldCards();
  renderCards(Number(activeButton.textContent));
}


renderCards(1);
