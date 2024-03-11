export function createContact() {
  content.innerHTML = '';

  const contentDiv = document.querySelector('#content');

  const heading = document.createElement('h1');
  heading.classList.add('contact-heading');
  heading.textContent = "Contact Us";
  contentDiv.appendChild(heading);

  const forInquiries = document.createElement('p');
  forInquiries.classList.add('contact-info');
  forInquiries.textContent = "For inquiries and reservations, please contact us at:";
  contentDiv.appendChild(forInquiries);

  const phone = document.createElement('p');
  phone.classList.add('contact-info');
  phone.textContent = "Phone: 123-456-7890";
  contentDiv.appendChild(phone);
  
  const email = document.createElement('p');
  email.classList.add('contact-info');
  email.textContent = "Email: info@burgerandfries.com";
  contentDiv.appendChild(email);

  const locationHeading = document.createElement('h2');
  locationHeading.classList.add('location-heading');
  locationHeading.textContent = "Our Location";
  contentDiv.appendChild(locationHeading);

  const addy1 = document.createElement('p');
  addy1.classList.add('contact-info');
  addy1.textContent = "123 Main Street";
  contentDiv.appendChild(addy1);

  const addy2 = document.createElement('p');
  addy2.classList.add('contact-info');
  addy2.textContent = "Cityville, State 12345";
  contentDiv.appendChild(addy2);
}