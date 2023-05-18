function createCard(title, imageUrl) {

    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
  
    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    
    const cardTitle = document.createElement("h2");
    cardTitle.innerHTML = `${title}`;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);
  
    /* Adopt Button */
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardBody.appendChild(cardButton);
  
    const buttonText = document.createTextNode("Adopt Now!");
    cardButton.appendChild(buttonText);
  
    // Step1: Create the cardBody div, add the class card-body and add it to the card
  
    // Step2: Create the cardTitle h2, add the class card-title,
    // set the text inside the tag to the "title" parameter of this function
    // and add it to the cardBody
  
    // Step3: Create the cardButton button, add the class card-button,
    // set the text inside the tag to be "Adopt Now"
    // and add it to the cardBody
  }
  
  for (let i = 0; i < animalsToAdopt.length ; i++) {
      createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture);
  } 
  
  // animalsToAdopt.forEach(createCard());
  
  /* Step 4: Create a for loop, for each element of the array, 
   call the function createCard with the corresponding parameter */