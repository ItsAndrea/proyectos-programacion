const cards = [
    {
        id: 1,
        img: "img/img4.webp",
        title: "title 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero possimus ratione magnam consequatur totam accusantium animi, perferendis fuga alias, voluptatem placeat id molestias culpa similique autem ad tenetur eum."
    },
    {
        id: 2,
        img: "img/img5.webp",
        title: "title 5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero possimus ratione magnam consequatur totam accusantium animi, perferendis fuga alias, voluptatem placeat id molestias culpa similique autem ad tenetur eum."
    },
    {
        id: 3,
        img: "img/img6.webp",
        title: "title 6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero possimus ratione magnam consequatur totam accusantium animi, perferendis fuga alias, voluptatem placeat id molestias culpa similique autem ad tenetur eum."
    },
];

// select items
const card = document.querySelector(".card");
const img = document.querySelector(".img-card");
const title = document.querySelector(".title");
const text = document.querySelector(".text");

const prevbtn = document.querySelector(".previous");
const nextbtn = document.querySelector(".next");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
    const item = cards[currentItem];
    img.src = item.img;
    title.textContent = item.title;
    text.textContent = item.text;
});

// show person based on item
function showCard(card){
    const item = cards[card];
    img.src = item.img;
    title.textContent = item.title;
    text.textContent = item.text;
}

// show next person
nextbtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > cards.length - 1) {
        currentItem = 0;
    }
    showCard(currentItem);
});

// show prev person
prevbtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = cards.length - 1;
    }
    showCard(currentItem);
});