const signupAdminForm = document.querySelector('#signupAdminForm');
    signupAdminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserRegistered = Users.find(user => user.email === email);
        if (!name) {
            return alert('Por favor, ingresa tu nombre.');
        }

        if (!email) {
            return alert('Por favor, ingresa tu correo electrónico.');
        }

        if (!validateEmail(email)) {
            return alert('Por favor, ingresa un correo electrónico válido.');
        }

        if (!password) {
            return alert('Por favor, ingresa una contraseña.');
        }

        if (isUserRegistered) {
            return alert('El administrador ya está registrado!');
        }

        Users.push({ name: name, email: email, password: password, role: 'admin' });
        localStorage.setItem('users', JSON.stringify(Users));

        alert('Registro de administrador exitoso!');
        window.location.href = '../login/login.html'; 
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo electrónico
        return re.test(String(email).toLowerCase());
    }