document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    loginBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    signupBtn.addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (localStorage.getItem(username) === password) {

            window.location.href = '/index2.html';
        } else {
            document.querySelector('#login-form .message').textContent = 'Invalid username or password';
        }
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (username && email && password) {
            localStorage.setItem(username, password);
            alert('Signup successful!');
            signupForm.reset();
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        } else {
            document.querySelector('#signup-form .message').textContent = 'Please fill in all fields';
        }
    });
});
