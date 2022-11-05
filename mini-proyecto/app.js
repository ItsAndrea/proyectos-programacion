const testimonials = [
    {
        id: 1,
        name: "Annie",
        opinion: "Good service"
    },
    {
        id: 2,
        name: "Daniel",
        opinion: "Recommended"
    },
    {
        id: 3,
        name: "Charles",
        opinion: "I liked it"
    },
    {
        id: 4,
        name: "Juanes",
        opinion: "Service 10/10"
    }
]

// select items
const names = document.getElementById("name");
const opinions = document.getElementById("opinion");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
    const item = testimonials[currentItem];
    names.textContent = item.name;
    opinions.textContent = item.opinion;
})

//show person based on item
function showTestimonial(person){
    const item = testimonials[person];
    names.textContent = item.name;
    opinions.textContent = item.opinion;
}

// automatic slider
function slider(){
    
}