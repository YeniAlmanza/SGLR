document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const suggestionsBox = document.getElementById('suggestions');
    const domains = ['gmail.com', 'yahoo.com', 'icloud.com', 'aol.com'];

    emailInput.addEventListener('input', () => {
        const value = emailInput.value;
        const atIndex = value.indexOf('@');

        if (atIndex !== -1) {
            const enteredDomain = value.slice(atIndex + 1).toLowerCase();
            const suggestions = domains
                .filter(domain => domain.startsWith(enteredDomain))
                .map(domain => value.slice(0, atIndex + 1) + domain);

            suggestionsBox.innerHTML = '';
            if (suggestions.length > 0) {
                suggestionsBox.style.display = 'block';
                suggestions.forEach(suggestion => {
                    const div = document.createElement('div');
                    div.textContent = suggestion;
                    div.addEventListener('click', () => {
                        emailInput.value = suggestion;
                        suggestionsBox.style.display = 'none';
                    });
                    suggestionsBox.appendChild(div);
                });
            } else {
                suggestionsBox.style.display = 'none';
            }
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.email-wrapper')) {
            suggestionsBox.style.display = 'none';
        }
    });
});