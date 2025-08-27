const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const contact = {
        emailUser: 'emiliamichalek1',
        emailDomain: 'gmail.com', // Replace with your domain
        phone: {
            area: '773',
            next: '808',
            last: '0829'
        }
    };

    const fullEmail = `${contact.emailUser}@${contact.emailDomain}`;
    const fullPhone = `(${contact.phone.area}) ${contact.phone.next}-${contact.phone.last}`;
    const fullPhoneLink = `${contact.phone.area}-${contact.phone.next}-${contact.phone.last}`;

    const emailSpan = document.getElementById('email-address');
    const phoneSpan = document.getElementById('phone-number');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyPhoneBtn = document.getElementById('copy-phone-btn');

    if (emailSpan) {
        emailSpan.innerHTML = `<a href="mailto:${fullEmail}">${fullEmail}</a>`;
    }

    if (phoneSpan) {
        phoneSpan.innerHTML = `<a href="tel:${fullPhoneLink}">${fullPhone}</a>`;
    }

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(fullEmail).then(function() {
                // Success feedback
                copyEmailBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyEmailBtn.textContent = 'Copy Email';
                }, 2000); // Reset text after 2 seconds
            });
        });
    }

    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(fullPhone).then(function() {
                // Success feedback
                copyPhoneBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyPhoneBtn.textContent = 'Copy Phone';
                }, 2000); // Reset text after 2 seconds
            });
        });
    }
});