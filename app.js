function toggleForms() {
    document.getElementById('show-register').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.login-container').classList.add('d-none');
        document.querySelector('.register-container').classList.remove('d-none');
    });

    document.getElementById('show-login').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.register-container').classList.add('d-none');
        document.querySelector('.login-container').classList.remove('d-none');
    });
}

toggleForms();
