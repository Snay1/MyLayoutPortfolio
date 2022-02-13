const toggle = document.querySelector('.toggle input')
const month = document.querySelector('.month')
const year = document.querySelector('.year')

const chooseToggle = document.querySelector('.choose-toggle input')
const basicItem = document.querySelector('.basic-item')
const premiumItem = document.querySelector('.premium-item')

const basicPlan = document.querySelector('.basic-plan')
const premiumPlan = document.querySelector('.premium-plan')


toggle.addEventListener('click', () => {
    if (toggle.checked) {
        month.classList.remove('bold-check')
        year.classList.add('bold-check')
    }
    else {
        month.classList.add('bold-check')
        year.classList.remove('bold-check')
    }
    
})
chooseToggle.addEventListener('click', () => {
    if (chooseToggle.checked) {
        basicItem.classList.add('grey-border')
        basicItem.classList.remove('red-border')
        premiumItem.classList.add('red-border')
        premiumItem.classList.remove('grey-border')
        basicPlan.style.opacity = 0;
        premiumPlan.style.opacity = 1;

    }
    else {
        basicItem.classList.add('red-border')
        basicItem.classList.remove('grey-border')
        premiumItem.classList.add('grey-border')
        premiumItem.classList.remove('red-border')
        basicPlan.style.opacity = 1;
        premiumPlan.style.opacity = 0;

    }
})

$('.plan-content').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });




