const signupAdminForm = document.querySelector('#signupAdminForm');

signupAdminForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);

    if (isUserRegistered) {
        return alert('El administrador ya está registrado!');
    }

   
    Users.push({ name: name, email: email, password: password, role: 'admin' });
    localStorage.setItem('users', JSON.stringify(Users));

    alert('Registro de administrador exitoso!');
    window.location.href = 'login.html'; 
});