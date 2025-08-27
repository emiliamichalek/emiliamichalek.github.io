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
        as: 'lek1',
        pt1: 'emil',
        s4s: 'icha',
        p2: 'iam',
        sc: 'il.c',
        awe: 'gma',
        anm: 'om',
        djw: {
            kd: '773',
            eb: '0829',
            co: '808'
        }
    };

    const jscfb = `${contact.pt1}${contact.p2}${contact.s4s}${contact.as}@${contact.awe}${contact.sc}${contact.anm}`;
    const iwbfew = `(${contact.djw.kd}) ${contact.djw.co}-${contact.djw.eb}`;
    const lsdbhv = `${contact.djw.kd}-${contact.djw.co}-${contact.djw.eb}`;

    const emailSpan = document.getElementById('email-address');
    const phoneSpan = document.getElementById('phone-number');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyPhoneBtn = document.getElementById('copy-phone-btn');

    if (emailSpan) {
        emailSpan.innerHTML = `<a href="mailto:${jscfb}">${jscfb}</a>`;
    }

    if (phoneSpan) {
        phoneSpan.innerHTML = `<a href="tel:${lsdbhv}">${iwbfew}</a>`;
    }

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(jscfb).then(function() {
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
            navigator.clipboard.writeText(iwbfew).then(function() {
                // Success feedback
                copyPhoneBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyPhoneBtn.textContent = 'Copy Phone';
                }, 2000); // Reset text after 2 seconds
            });
        });
    }
});