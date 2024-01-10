const loginFormHandler = async (event) => { // form to handle logins
    event.preventDefault();
  
    // Get values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) { // make sure they exist
        console.log("Welcome back " + email);
    };
}

const signupFormHandler = async (event) => { // form to handle people signing up
    event.preventDefault();

    // Get values
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) { // make sure they exist
        console.log("Welcome " + name);
    }
};
  
  document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signupForm')
    .addEventListener('submit', signupFormHandler);
  