
export function createMenu() {
  content.innerHTML = '';

  let contentDiv = document.querySelector('#content');

  const heading = document.createElement('h1');
  heading.classList.add('menu-heading');
  heading.textContent = "Our Menu";
  contentDiv.appendChild(heading);

  const para = document.createElement('p');
  para.classList.add('menu-para');
  para.textContent = "Explore our delicious offerings:";
  contentDiv.appendChild(para);

  const burger = document.createElement('h3');
  burger.classList.add('menu-item');
  burger.textContent = "Burger Deluxe";
  contentDiv.appendChild(burger);

  const cheeseburger = document.createElement('h3');
  cheeseburger.classList.add('menu-item');
  cheeseburger.textContent = "Classic Cheeseburger";
  contentDiv.appendChild(cheeseburger);

  const vegBurger = document.createElement('h3');
  vegBurger.classList.add('menu-item');
  vegBurger.textContent = "Vegetarian Burger";
  contentDiv.appendChild(vegBurger);

  const regFries = document.createElement('h3');
  regFries.classList.add('menu-item');
  regFries.textContent = "Crispy Fries";
  contentDiv.appendChild(regFries);

  const curlyFries = document.createElement('h3');
  curlyFries.classList.add('menu-item');
  curlyFries.textContent = "Seasoned Curly Fries";
  contentDiv.appendChild(curlyFries);

  const onionRings = document.createElement('h3');
  onionRings.classList.add('menu-item');
  onionRings.textContent = "Onion Rings";
  contentDiv.appendChild(onionRings);
}
