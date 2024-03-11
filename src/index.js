import { loadHomePage } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

loadHomePage();

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

homeButton.addEventListener('click', loadHomePage);
menuButton.addEventListener('click', createMenu);
contactButton.addEventListener('click', createContact);
