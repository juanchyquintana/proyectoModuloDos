document.querySelectorAll('.toggle-password').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const inputElement = document.getElementById(targetId);
        const icon = this.querySelector('i');

        if (inputElement.type === 'password') {
            inputElement.type = 'text';
            icon.classList.remove('bi-eye-fill');
            icon.classList.add('bi-eye-slash');
        } else {
            inputElement.type = 'password';
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye-fill');
        }
    });
});
