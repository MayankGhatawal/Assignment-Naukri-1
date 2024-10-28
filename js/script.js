document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const form = document.getElementById('signupForm');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  
  form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Clear previous error messages
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(message => message.textContent = '');
  
      // Basic validation
      let isValid = true;
  
      if (!firstName) {
          firstNameInput.nextElementSibling.textContent = 'First name is required';
          isValid = false;
      }
  
      if (!lastName) {
          lastNameInput.nextElementSibling.textContent = 'Last name is required';
          isValid = false;
      }
  
      if (!email || !isValidEmail(email)) {
          emailInput.nextElementSibling.textContent = 'Please enter a valid email address';
          isValid = false;
      }
  
      if (!phone || !isValidPhoneNumber(phone)) {
          phoneInput.nextElementSibling.textContent = 'Please enter a valid phone number';
          isValid = false;
      }
  
      if (!password || password.length < 8) {
          passwordInput.nextElementSibling.textContent = 'Password must be at least 8 characters';
          isValid = false;
      }
  
      if (isValid) {
          // Log the data to the console
          console.log('First Name:', firstName);
          console.log('Last Name:', lastName);
          console.log('Email:', email);
          console.log('Phone Number:', phone);
          console.log('Password:', password);
  
          // You can add more complex validation and data handling here, like sending data to a server
          alert('Form submitted successfully!');
          form.reset();
      }
  });
  
  function isValidEmail(email) {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  
  function isValidPhoneNumber(phone) {
      // Basic phone number validation
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
  }