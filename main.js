const dinos = [{
    id: 'dino1',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  }, 
  {
    id: 'dino1',
    name: 'Steve',
    type: 'Velociraptor',
    age: 200,
    owner: 'John',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
  {
    id: 'dino1',
    name: 'Sarah',
    type: 'Stegasaurus',
    age: 50,
    owner: 'Luke',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// function that closes the single dino view and reprints the view of all dinosaurs in the dinos array when the "x" button is clicked
const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos);
};

// function that removes the dino cards view and replaces it with a view of a single dinosaur when the "eye" button is clicked
const viewSingleDino = () => {
    let domString = '';
    domString += '<button id="close-single-view" class="btn btn-outline-dark text-white"><i class="far fa-window-close"></i></button>';
    printToDom('kennel', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
};

// function that adds an click event listener to all "view" buttons on dino cards being printed
const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (let i = 0; i < dinos.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    }
};

// function that prints the finos array, printing each dino as an individual card
const printDinos = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++) {
        domString +=    '<div class="col-lg-4 col-md-6">';
        domString +=    '<div class="card mb-3">';
        domString +=    `<img src="${dinoArray[i].imageUrl}" class="card-img-top" alt="picture of dino">`;
        domString +=    '<div class="card-body text-center">'
        domString +=        `<h5 class="card-title">${dinoArray[i].name}</h5>`;
        domString +=        `<p class="card-text">Health: ${dinoArray[i].health}</p>`;
        domString +=        '<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>';
        domString +=    '</div>';
        domString +=    '</div>';
        domString +=    '</div>';
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
};

// function to add a new dino to the array from the form inputs
const newDino = (e) => {
    e.preventDefault();
    const brandNewDino = {
        id: `dino${dinos.length + 1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value
      }
    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset(); // code that resets the form inputs 
    document.getElementById('collapseOne').classList.remove('show'); // code that collapses the accordion, hiding the form
    printDinos(dinos);
};

const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
    printDinos(dinos);
};

init();