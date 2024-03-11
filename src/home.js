

export function loadHomePage() {
  content.innerHTML = '';

  const contentDiv = document.querySelector('#content');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  contentDiv.appendChild(imgContainer);

  const burgerFriesImg = document.createElement('img');
  burgerFriesImg.classList.add('burger-fries-img');
  burgerFriesImg.src = '../src/burger-fries.jpg';
  burgerFriesImg.alt = 'Image of burger and fries'
  imgContainer.appendChild(burgerFriesImg);

  const burgerFriesImg2 = document.createElement('img');
  burgerFriesImg2.classList.add('burger-fries-img');
  burgerFriesImg2.src = '../src/burger-fries2.jpg';
  burgerFriesImg2.alt = 'Image of burger and fries'
  imgContainer.appendChild(burgerFriesImg2);

  const burgerFriesImg3 = document.createElement('img');
  burgerFriesImg3.classList.add('burger-fries-img');
  burgerFriesImg3.src = '../src/burger-fries3.jpg';
  burgerFriesImg3.alt = 'Image of burger and fries'
  imgContainer.appendChild(burgerFriesImg3);

  const paraContainer = document.createElement('div');
  paraContainer.classList.add('para-container');
  contentDiv.appendChild(paraContainer);
  
  const heading = document.createElement('h2');
  heading.classList.add('welcome-heading');
  heading.textContent = 'Welcome to Burgers and Fries';
  paraContainer.appendChild(heading);

  const welcomePara = document.createElement('p');
  welcomePara.classList.add('welcome-para');
  welcomePara.textContent = "your go-to place for delicious burgers, crispy fries, and refreshing beverages. We take pride in serving high-quality, mouthwatering food that will leave you craving for more. Our friendly staff is dedicated to providing you with an exceptional dining experience. Whether you're dining in or grabbing takeout, we guarantee satisfaction with every bite.";
  paraContainer.appendChild(welcomePara);

}