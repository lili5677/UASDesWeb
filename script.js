//NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');

    hamburger.addEventListener('click', function() {
        navItems.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });
});


//IMAGE & HEADER
document.addEventListener('DOMContentLoaded', () => {
    // Animate text elements
    const animatedElements = document.querySelectorAll('.main-title, .sub-title, .description, .world-map');
    animatedElements.forEach(el => el.classList.add('animate'));

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


//PLATFORM
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      1023: {
        slidesPerView: 3
      }
    }
  });


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        767: {
            slidesPerView: 2
        },
        1023: {
            slidesPerView: 3
        }
    }
});



//service
const words = ['MAINTENAGE', 'DATA'];
let currentIndex = 0;
const textElement = document.querySelector('.animated-text');

function changeText() {
    textElement.classList.add('hiding');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        textElement.textContent = words[currentIndex];
        textElement.classList.remove('hiding');
        textElement.classList.add('showing');
        
        setTimeout(() => {
            textElement.classList.remove('showing');
        }, 50);
    }, 500);
}

setInterval(changeText, 2000);


/*client nasional*/
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('slidingContainer');
    const content = document.getElementById('slidingContent');
    let isPaused = false;

    const agencies = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png", alt: "Agency 1" },
        { src: "https://d22gwcrfo2de51.cloudfront.net/wp-content/uploads/2022/06/Logo-Pertamina-resize-2-1-540x540.png", alt: "Agency 2" },
        { src: "https://upload.wikimedia.org/wikipedia/id/thumb/c/c4/Telkom_Indonesia_2013.svg/1200px-Telkom_Indonesia_2013.svg.png", alt: "Agency 3" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Logo_PT_Kereta_Api_Indonesia_%28Persero%29_2020.svg/2560px-Logo_PT_Kereta_Api_Indonesia_%28Persero%29_2020.svg.png", alt: "Agency 4" },
        { src: "https://seeklogo.com/images/G/garuda-indonesia-logo-8A90F09D68-seeklogo.com.png", alt: "Agency 5" },
        { src: "https://jasalogocepat.com/wp-content/uploads/2023/08/download-logo-jasa-marga-png-jasalogocepatcom.png", alt: "Agency 6" },
        { src: "https://images.seeklogo.com/logo-png/39/2/bca-bank-central-asia-logo-png_seeklogo-399949.png?v=638687015070000000", alt: "Agency 7" },
        { src: "https://alumni.unsoed.ac.id/wp-content/uploads/2022/06/PT-Freeport-Indonesia.png", alt: "Agency 8" },
    ];

    function createAgencyBox(agency) {
        const box = document.createElement('div');
        box.className = 'agency-box';
        box.innerHTML = `<img src="${agency.src}" alt="${agency.alt}">`;
        return box;
    }

    agencies.forEach(agency => {
        content.appendChild(createAgencyBox(agency));
    });

    agencies.forEach(agency => {
        content.appendChild(createAgencyBox(agency));
    });

    function moveBoxes() {
        if (isPaused) return;

        const firstBox = content.firstElementChild;
        const boxWidth = firstBox.offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(firstBox).marginRight);
        const moveDistance = boxWidth + marginRight;

        content.style.transition = 'transform 0.5s ease-in-out';
        content.style.transform = `translateX(-${moveDistance}px)`;

        setTimeout(() => {
            content.style.transition = 'none';
            content.style.transform = 'translateX(0)';
            content.appendChild(firstBox);
        }, 500);
    }

    setInterval(moveBoxes, 2000);

    container.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    container.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});

//new galery client
document.addEventListener('DOMContentLoaded', function() {
    const newContainer = document.getElementById('newSlidingContainer');
    const newContent = document.getElementById('newSlidingContent');
    let isNewPaused = false;

    const newAgencies = [
        { src: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png", alt: "New Agency 1" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png", alt: "New Agency 2" },
        { src: "https://1000logos.net/wp-content/uploads/2018/02/Toyota-logo.png", alt: "New Agency 3" },
        { src: "https://finevpn.org/wp-content/uploads/2024/02/alibaba.com-logo-logo.png", alt: "New Agency 4" },
        { src: "https://download.logo.wine/logo/Siemens/Siemens-Logo.wine.png", alt: "New Agency 5" },
        { src: "https://cdn.icon-icons.com/icons2/2845/PNG/512/sony_logo_icon_181261.png", alt: "New Agency 6" },
        { src: "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png?v=638687088100000000", alt: "New Agency 7" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/1200px-Procter_%26_Gamble_logo.svg.png", alt: "New Agency 8" },
    ];

    function createNewAgencyBox(agency) {
        const box = document.createElement('div');
        box.className = 'new-agency-box';
        box.innerHTML = `<img src="${agency.src}" alt="${agency.alt}">`;
        return box;
    }

    newAgencies.forEach(agency => {
        newContent.appendChild(createNewAgencyBox(agency));
    });

    newAgencies.forEach(agency => {
        newContent.appendChild(createNewAgencyBox(agency));
    });

    function moveNewBoxes() {
        if (isNewPaused) return;

        const firstBox = newContent.firstElementChild;
        const boxWidth = firstBox.offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(firstBox).marginRight);
        const moveDistance = boxWidth + marginRight;

        newContent.style.transition = 'transform 0.5s ease-in-out';
        newContent.style.transform = `translateX(-${moveDistance}px)`;

        setTimeout(() => {
            newContent.style.transition = 'none';
            newContent.style.transform = 'translateX(0)';
            newContent.appendChild(firstBox);
        }, 500);
    }

    setInterval(moveNewBoxes, 2000);

    newContainer.addEventListener('mouseenter', () => {
        isNewPaused = true;
    });

    newContainer.addEventListener('mouseleave', () => {
        isNewPaused = false;
    });
});


//section
document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".partner-logo");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Hentikan pengamatan
            }
        });
    });

    logos.forEach(logo => observer.observe(logo));
});


//contact
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.contact-section');
    
    // Add show class after a small delay for better effect
    setTimeout(() => {
        section.classList.add('show');
    }, 100);

    // Optional: Add animation when scrolling to the section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(section);
});


