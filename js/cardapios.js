const dayButtons = document.querySelectorAll('.days button');
const dayMenus = document.querySelectorAll('.day-menu');
dayButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    const day = button.getAttribute('data-day');
    dayMenus.forEach(menu => menu.classList.remove('active'));
    document.getElementById(day).classList.add('active');
  });
});
