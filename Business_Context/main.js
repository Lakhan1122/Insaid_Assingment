// Get the button element
const button = document.querySelector('#cta-button');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Scroll to the services section when the button is clicked
  const servicesSection = document.querySelector('#services-section');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});



// contact js//
// Get the form element
const form = document.querySelector('#contact-form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(form);

  // Validate the form data (example validation)
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  if (!name || !email || !message) {
    alert('Please fill in all required fields');
    return;
  }

  // Submit the form
  form.submit();

  // Show a success message to the user
  const successMessage = document.querySelector('#success-message');
  successMessage.style.display = 'block';

  // Reset the form
  form.reset();
});
