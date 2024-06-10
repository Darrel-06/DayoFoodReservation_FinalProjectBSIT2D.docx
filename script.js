document.addEventListener('DOMContentLoaded', (event) => {

    // Form Validation for Order Page
    const orderForm = document.querySelector('form');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let valid = true;
            const inputs = this.querySelectorAll('input');

            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    alert(`${input.previousElementSibling.textContent} is required`);
                    valid = false;
                }
            });

            if (valid) {
                alert('Order placed successfully!');
                this.reset();
            }
        });
    }

    // Navigation highlight
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Menu Order Button Click
    const orderButtons = document.querySelectorAll('.menu_btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'order.html';
        });
    });

});
