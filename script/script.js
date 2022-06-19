const toggle = document.querySelector('.toggle'),
      svitch = document.querySelector('.switch'),
      btn = document.querySelector('.btn');
let root = document.documentElement;

toggle.addEventListener('click', () => {

  if(btn.classList.value !== 'btn active'){
    root.style.setProperty('--black', '#ffffff');
    root.style.setProperty('--greyDark', '#ffffff');
    root.style.setProperty('--grey', '#ffffff');
    root.style.setProperty('--white', '#292929');
    btn.classList.add('active');
  }
    else if(btn.classList.value == 'btn active'){
      root.style.setProperty('--black', '#000000');
      root.style.setProperty('--greyDark', '#303030');
      root.style.setProperty('--grey', '#868585');
      root.style.setProperty('--white', '#fff');

      btn.classList.remove('active');
    }
    
})

localStorage.setItem(toggle,'click');