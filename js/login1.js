const loginForm = document.querySelector('#loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const role = document.querySelector('#role').value;
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        if (!email) {
            return alert('Por favor, ingresa tu correo electrónico.');
        }

        if (!password) {
            return alert('Por favor, ingresa tu contraseña.');
        }

        if (!role) {
            return alert('Por favor, selecciona un rol.');
        }

        const validUser = Users.find(user => user.email === email && user.password === password && user.role === role);
        
        if (!validUser) {
            return alert('Usuario y/o contraseña incorrectos o rol incorrecto!');
        }

        alert(`Bienvenido ${validUser.name}, has iniciado sesión como ${role}`);
        localStorage.setItem('login_success', JSON.stringify(validUser));

        if (role === 'admin') {
            window.location.href = "../interfaz_admin/inicio1.html"; 
        } else if (role === 'user') {
            window.location.href = "../interfaz_user/inicio.html"; 
        }
    })