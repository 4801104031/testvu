document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlider = document.querySelector('.testimonial-wrapper');
    if (testimonialSlider) {
        console.log('Testimonial slider initialized');
    }

    // Xử lý modal video giới thiệu
    const videoButton = document.querySelector('[data-toggle="modal"][data-target="modalVideoIntroduce"]');
    if (videoButton) {
        videoButton.addEventListener('click', function() {
            // Logic để mở modal video
            console.log('Video modal opened');
        });
    }

    // Xử lý form đăng ký tư vấn
    const consultForm = document.querySelector('.consult-form');
    if (consultForm) {
        consultForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Logic xử lý form đăng ký tư vấn
            console.log('Consult form submitted');
        });
    }

    // Xử lý animation cho phần "Về chúng tôi"
    const aboutSections = document.querySelectorAll('.about-item');
    if (aboutSections.length) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });

        aboutSections.forEach(section => {
            aboutObserver.observe(section);
        });
    }
});

console.log('Home page JavaScript loaded successfully.');