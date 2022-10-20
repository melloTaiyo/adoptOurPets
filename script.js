const petInfo = [
  {
    name: "Charly",
    breed: "Dog - Mixed",
    img: "./images/pets-charly.png",
    text:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  },    
    {
      name: "Katrine",
      breed: "Cat - British Shorthair",
      img: "./images/pets-katrine.png",
      text:
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    },
    {
      name: "Jennifer",
      breed: "Dog - Labrador",
      img: "./images/pets-jennifer.png",
      text:
              "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    },
    {
      name: "Freddie",
      breed: "Cat - Mixed",
      img:"./images/pets-freddie.png",
      text:
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    },
    {
      name: "Woody",
      breed: "Dog - Golden Retriever",
      img: "./images/pets-woody.png",
      text:
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    },
    {
      name: "Scarlett",
      breed: "Dog - Jack Russell Terrier",
      img:
        "./images/pets-scarlet.png",
      text:
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    },
       
  ];

  const petImg = document.getElementById('pet-img');
  const petsName = document.getElementById('name');
  const breed = document.getElementById('breed');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

window.addEventListener('DOMContentLoaded', function(){
  showPet();
})

let currentPet = 0;

const showPet = () =>{
const pet = petInfo[currentPet];
petImg.src = pet.img;
petsName.textContent = pet.name;
breed.textContent = pet.breed;
info.textContent = pet.text;
}

nextBtn.addEventListener('click', function(){
  currentPet++;
  if (currentPet > petInfo.length-1) {
    currentPet = 0;}
  showPet();
})

prevBtn.addEventListener('click', function(){
  currentPet--;
  if (currentPet < 0) {
    currentPet = petInfo.length-1;}
  showPet();
})

randomBtn.addEventListener("click", function () {
      currentPet = Math.floor(Math.random() * (petInfo.length-1));
      showPet(currentPet);
    });