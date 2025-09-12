// by default loading all trees
document.addEventListener('DOMContentLoaded', function() {
    const defaultButton = document.querySelector('.category-btn.active');  
    allTrees(defaultButton);
});  


// Set active category
function setActiveCategory(element) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
            
    // Add active class to clicked button
    element.classList.add('active');
}


// showSpinner
showSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
    setTimeout(() => {
        console.log("Data loaded!");
        spinner.style.display = "none";
    }, 50);
};     


// all trees
const allTrees = (element) => {
  setActiveCategory(element);  
  showSpinner();
  const container = document.getElementById("apiData");
  container.innerHTML = ``;
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((data) => {
      let plants = data.plants;
      plants.forEach((todo) => {
        const newEntry = document.createElement("div");
        newEntry.classList.add(
          "w-[100%]",
          "sm:w-[31%]",
          "border",
          "flex",
          "flex-wrap",
          "flex-col",
          "bg-white",
          "rounded-[0.5rem]",
          "p-[1rem]",
          "space-y-2"
        );
        newEntry.innerHTML = `
            <div class="h-[15rem] w-[100%]"><img class="h-[15rem] w-[100%] rounded-[0.5rem]" src="${
              todo.image
            }" alt=""></div>
                <h4 onclick="openModal(this)" class="text-[1.1rem] font-semibold hover:text-green-400 hover:cursor-pointer">${todo.name}</h4>
                <p class="text-[0.8rem]">${todo.description.slice(0, 95)}...</p>
                <div class="flex justify-between items-center text-[1.1rem]">
                    <h2 class="text-green-600 bg-[#dcfce7] p-2.5 pt-0.5 pb-0.5 rounded-[0.5rem]">${
                      todo.category
                    }</h2>
                    <h6><span class="text-[1.3rem]">৳</span> ${todo.price}</h6>
                </div>
                <button onclick = "trees(this)" class="text-center text-white bg-[#15803D] hover:bg-green-500 p-1.5 rounded-[1rem]">Add to Cart</button>
            </div>    
        `;
        apiData.appendChild(newEntry);
      });
    });
};


// category trees
const categoryTrees = (element,id) => { 
  setActiveCategory(element);  
  showSpinner();  
  const container = document.getElementById("apiData");
  container.innerHTML = ``;
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((response) => response.json())
    .then((data) => {
      let plants = data.plants;
      plants.forEach((todo) => {
        const newEntry = document.createElement("div");
        newEntry.classList.add(
          "w-[100%]",
          "sm:w-[31%]",
          "border",
          "flex",
          "flex-wrap",
          "flex-col",
          "bg-white",
          "rounded-[0.5rem]",
          "p-[1rem]",
          "space-y-6"
        );
        newEntry.innerHTML = `
            <div class="h-[15rem] w-[100%]"><img class="h-[15rem] w-[100%] rounded-[0.5rem]" src="${
              todo.image
            }" alt=""></div>
                <h4 onclick="openModal(this)" class="text-[1.1rem] font-semibold hover:text-green-400 hover:cursor-pointer">${todo.name}</h4>
                <p class="text-[0.8rem]">${todo.description.slice(0, 95)}...</p>
                <div class="flex justify-between items-center text-[1.1rem]">
                    <h2 class="text-green-600 bg-[#dcfce7] p-2.5 pt-0.5 pb-0.5 rounded-[0.5rem]">${
                      todo.category
                    }</h2>
                    <h6><span class="text-[1.3rem]">৳</span> ${todo.price}</h6>
                </div>
                <button onclick = "trees(this)" class="text-center text-white bg-[#15803D] hover:bg-green-500 p-1.5 rounded-[1rem]">Add to Cart</button>
            </div>    
        `;
        apiData.appendChild(newEntry);
      });
    });
};


//add cart history
const trees = (button) => {
  const cartList = document.getElementById("cartlist");
  const prc = button.parentNode.querySelector("h6").innerText.substring(1);
  const treeName = button.parentNode.querySelector("h4").innerText;
  alert(`${treeName} has been added to the cart.`);
  const price = Number(prc);

  const existingEntry = Array.from(cartList.children).find((entry) => {
    const name = entry.querySelector("h4")?.innerText;
    return name === treeName;
  });

  if (existingEntry) {
    const countSpan = existingEntry.querySelector("#cntt");
    const currentCount = Number(countSpan.innerText);
    countSpan.innerText = currentCount + 1;

    const total = Number(document.getElementById("total").innerText);
    document.getElementById("total").innerText = (total + price).toString();
  } else {
    let newEntry = document.createElement("div");
    newEntry.classList.add(
      "bg-[#dcfce7]",
      "rounded-[0.5rem]",
      "flex",
      "justify-between",
      "items-center",
      "p-2",
      "pt-0",
      "pb-0"
    );

    newEntry.innerHTML = `
      <div>
          <h4 class="font-semibold">${treeName}</h4>
          <p><span class="text-[1.3rem]">৳</span> <span id='pc'>${prc}</span> <span class="text-[1.1rem]">×</span> <span id="cntt">1</span> </p>
      </div>
      <span onclick="del(this)" class="cross text-red-500 hover:rounded-md hover:bg-black hover:text-white"><i class="fa-solid fa-xmark"></i></span>
    `;

    cartList.appendChild(newEntry);

    const total = Number(document.getElementById("total").innerText);
    document.getElementById("total").innerText = (total + price).toString();
  }
};


// delete cart history
const del = (cross) => {
  const prt = cross.parentNode;

  const countSpan = prt.querySelector("#cntt");
  let count = Number(countSpan.innerText);

  const price = Number(prt.querySelector("#pc").innerText);

  const totalEl = document.getElementById("total");
  let total = Number(totalEl.innerText);

  totalEl.innerText = (total - price).toString();

  if (count > 1) {
    count--;
    countSpan.innerText = count;
    
  } else {
    prt.remove();
  }
};


// for modal card show
const detailHistory = [
  { 1: "Mango Tree" },
  { 2: "Guava Tree" },
  { 3: "Jackfruit Tree" },
  { 4: "Gulmohar" },
  { 5: "Champa" },
  { 6: "Krishnachura" },
  { 7: "Banyan Tree" },
  { 8: "Neem Tree" },
  { 9: "Rain Tree" },
  { 10: "Amla Tree" },
  { 11: "Arjun Tree" },
  { 12: "Bael Tree" },
  { 13: "Teak" },
  { 14: "Mahogany" },
  { 15: "Sal Tree" },
  { 16: "Pine" },
  { 17: "Cypress" },
  { 18: "Fir" },
  { 19: "Bonsai" },
  { 20: "Areca Palm" },
  { 21: "Fan Palm" },
  { 22: "Golden Bamboo" },
  { 23: "Black Bamboo" },
  { 24: "Giant Bamboo" },
  { 25: "Money Plant" },
  { 26: "Bougainvillea" },
  { 27: "Passion Flower" },
  { 28: "Water Lily" },
  { 29: "Lotus" },
  { 30: "Water Hyacinth" },
];


// Open modal function
function openModal(plantName) {
    for (let i = 0; i < detailHistory.length; i++) {
        const obj = detailHistory[i];
        const key = Object.keys(obj)[0];
        const value = obj[key];
        if(value === plantName.innerText) {
            fetch(`https://openapi.programming-hero.com/api/plant/${key}`)
            .then(res => res.json())
            .then(data => {
                const plant = data.plants;

                document.getElementById("modal-title").textContent = plant.name;
                document.getElementById("modal-image").src = plant.image;
                document.getElementById("modal-description").innerHTML = `<span><span class='font-bold'>Description:</span> ${plant.description}</span>`;
                document.getElementById("modal-category").innerHTML = `<span><span class='font-bold'>Category:</span> ${plant.category}</span>`;
                // document.getElementById("modal-price").textContent = `৳${plant.price}`;
                document.getElementById("modal-price").innerHTML = `<span><span class='font-bold'>Price: <span class="text-[1.2rem]">৳</span></span>${plant.price}</span>`;

                const main = document.getElementById("bg");
                main.classList.add("opacity-50");

                const modal = document.getElementById("modal");
                modal.classList.remove("opacity-0", "invisible");
                modal.classList.add("opacity-100", "visible");
                document.body.style.overflow = "hidden";
            });
        }
    }
};


// Close modal function
function closeModal() {

    const main = document.getElementById("bg");
    main.classList.remove("opacity-50");

    const modal = document.getElementById("modal");
    modal.classList.remove("opacity-100", "visible");
    modal.classList.add("opacity-0", "invisible");
    document.body.style.overflow = "auto";
};