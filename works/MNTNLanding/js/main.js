burger_open = document.getElementsByClassName(".burger__open");
burger_close = document.getElementsByClassName(".burger__close");
burger = document.getElementsByClassName(".header__burger");
actualDisplay = getComputedStyle(added_item_button).display;



document.getElementsByClassName('.burger__button').onclick = function() {
    alert('click');
    if (actualDisplay == 'none') {
        burger.style.display = 'block';
      } else {
        burger.innerText += '.';
      }
  }