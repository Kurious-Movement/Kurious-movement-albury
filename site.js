
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if(btn && menu){
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    document.addEventListener('click', (e)=>{
      if(!menu.contains(e.target) && !btn.contains(e.target)){ menu.classList.add('hidden'); }
    });
  }
  const ham = document.getElementById('hamburger');
  const panel = document.getElementById('mobilePanel');
  if(ham && panel){
    ham.addEventListener('click', ()=> panel.classList.toggle('hidden'));
  }
  const arrow = document.getElementById('bgArrow');
  if(arrow){
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.25;
      arrow.style.transform = `translateY(${y}px)`;
    });
  }
  const slide = document.querySelector('#choices');
  if(slide){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ slide.classList.add('in'); } });
    }, { threshold: 0.2 });
    io.observe(slide);
  }
});
