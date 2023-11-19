// script.js
function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'yourUsername' && password === 'yourPassword') {
    alert('Login successful');
    // Redirect to another page or perform other actions
  } else {
    alert('Incorrect username or password');
  }
}