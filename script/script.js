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


class Scroll {
  constructor({element,range,unit}) {
      if(typeof element == 'string'){
          this.el = document.querySelector(element);
      }else if(element instanceof HTMLElement){
          this.el = element
      } 
      
      if(window.innerWidth <= 780 && window.innerWidth > 420){
        this.top = 100
      }else if(window.innerWidth <= 420){
        this.top = 80
      }else{
          this.top = 140; 
      }

      this.el.style.position = 'fixed';
      this.unit = unit;
      this.el.style.top = this.scrollNumber() + 'px';
      window.addEventListener('scroll', () => this.scroll())
      window.addEventListener('resize', () => this.scroll())
      console.log(this.top);
  }
  
  scroll() {
      
      this.scrollUnit = this.scrollNumber();
      
      if(this.scrollUnit - scrollY > 0) {
          this.el.style.top = this.scrollUnit - scrollY + 'px'
          this.el.style.right = '5%'
      }else {
          this.el.style.right = '5%'
          this.el.style.top = 10;
      }
  }
  scrollNumber() {
      if(this.unit == 'px') {
          return this.top >= 0 ? this.top : 0;
      }else if(this.unit == '%' || this.unit == undefined){
          return this.calc(window.innerHeight,this.top) -  this.el.clientHeight
      }
  }
  calc(height,top){
      return height / 100 * top
  }
  
}

let myScroll = new Scroll({
  element: '.toggle',
  range: 140,
  unit: '%'
});
