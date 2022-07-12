const toggle = document.querySelector('.toggle'),
      svitch = document.querySelector('.switch'),
      btn = document.querySelector('.btn'),
      body = document.querySelector('.body');
let root = document.documentElement;  


toggle.addEventListener('click', () => {
  let theme = '';
  let pos = '';

  if(body.classList.contains('light')){
    body.classList.remove('light');
    body.classList.add('dark');
    btn.classList.remove('right');
    btn.classList.add('left');
    pos = 'left';
    theme ='dark';
  }
    else if(body.classList.contains('dark')){
      body.classList.remove('dark');
      body.classList.add('light');
      btn.classList.remove('left');
      btn.classList.add('right');
      pos = 'right';
      theme ='light';
    }
    localStorage.setItem('--position',pos)
    localStorage.setItem('--theme',theme)
})
document.addEventListener('DOMContentLoaded', () => {
  const val = localStorage.getItem('--theme'),
        batn = localStorage.getItem('--position');
  if(val){
    body.classList.add(val);
    btn.classList.add(batn);
  }else{
    body.classList.add('light'); 
    btn.classList.add('right');
  }
  
})
