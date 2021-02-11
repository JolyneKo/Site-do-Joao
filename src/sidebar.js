const menu1 = document.querySelector('.barra-superior .menu-icon');
const menu2 = document.querySelector('.barra-lateral .menu-icon');
const sidebar = document.querySelector('.barra-lateral');
const icon = document.querySelector('.barra-superior img');
const titulo = document.querySelector('.barra-superior p');

menu1.addEventListener('click', e => {
    sidebar.style.visibility = 'visible';
    sidebar.style.width = '200px';
    sidebar.style.padding = '10px 25px'; 
});

menu2.addEventListener('click', e => {
    sidebar.style.visibility = 'hidden';
    sidebar.style.width = '0';
    sidebar.style.padding = '10px 0';
});

icon.addEventListener('click', e => {
    icon.style.transform = 'scaleX(-1)';
    setTimeout(() => icon.style.transform = 'scaleX(1)', 300);
});

titulo.addEventListener('click', e => {
    window.location.href = 'index.html';
})
