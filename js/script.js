document.addEventListener('DOMContentLoaded', function() {
    // Валідація форми замовлення
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            if (!nameInput.value || !phoneInput.value) {
                alert('Будь ласка, заповніть усі обов\'язкові поля.');
                event.preventDefault();
            } else {
                alert('Дякуємо за ваше замовлення! Ми зв\'яжемося з вами найближчим часом.');
                // Тут можна додати код для відправки даних форми на сервер.
                // Для прикладу, можна очистити форму після успішного "замовлення":
                orderForm.reset();
            }
        });
    }

    // Плавна прокрутка до секції "Замовити" при натисканні на відповідне посилання
    const orderLink = document.querySelector('a[href="#order"]');
    if (orderLink) {
        orderLink.addEventListener('click', function(event) {
            event.preventDefault();
            const orderSection = document.getElementById('order');
            orderSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Додавання класу 'loaded' до body після завантаження сторінки (для можливих анімацій)
    document.body.classList.add('loaded');

    // Додаткова функціональність може бути додана тут, наприклад:
    // - Анімації при скролінгу
    // - Інтерактивні елементи
    // - Відправка даних форми через AJAX
});
