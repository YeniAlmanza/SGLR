document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function (e) {
        let input = phoneInput.value.replace(/\D/g, '').substring(0, 10); // Remove non-digits
        let formatted = '';

        if (input.length > 0) {
            formatted += '(' + input.substring(0, 3);
        }
        if (input.length >= 4) {
            formatted += ')-' + input.substring(3, 6);
        }
        if (input.length >= 7) {
            formatted += '-' + input.substring(6, 10);
        }

        phoneInput.value = formatted;
    });
});