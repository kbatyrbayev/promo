window.onload = function () {


  /* sticky logic start */
  let navigationMenu = document.getElementById('navigation-menu');
  let sticky = navigationMenu.offsetTop;

  function setStickyMenu() {
    if (window.pageYOffset > sticky) {
      navigationMenu.classList.add("sticky");
    } else {
      navigationMenu.classList.remove("sticky");
    }
  }

  window.onscroll = function () { setStickyMenu(); };

  setStickyMenu();
  /* sticky logic end */




  /* scroll when select menu start*/
  let menu = document.querySelectorAll('.menu__link');

  for (let m of menu) {
    m.addEventListener('click', function (event) {
      event.preventDefault();
      let id = this.getAttribute('href').substr(1);
      let elem = document.getElementById(id).offsetTop;
      window.scrollTo({ top: elem-140, behavior: 'smooth'});
    });
  }
  /* scroll when select menu end*/



}
