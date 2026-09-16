
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
}
let demoOrder = 0;
document.querySelectorAll('.order-demo').forEach(btn => {
  btn.addEventListener('click', () => {
    demoOrder++;
    const old = btn.textContent;
    btn.textContent = `Added · Demo Order (${demoOrder})`;
    setTimeout(() => btn.textContent = old, 1500);
  });
});
