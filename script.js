document.querySelector('.burger')?.addEventListener('click',()=>document.querySelector('nav ul').classList.toggle('open'));
document.getElementById('quote')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
const t=`Hello Charles Roofing, I'm ${f.get('name')} (${f.get('phone')}). Service: ${f.get('service')}. ${f.get('msg')}`;
window.open('https://wa.me/254705720554?text='+encodeURIComponent(t),'_blank');});

const lb=document.getElementById('lb');if(lb){document.querySelectorAll('.gallery figure').forEach(f=>f.addEventListener('click',()=>{lb.querySelector('img').src=f.querySelector('img').src;lb.querySelector('p').textContent=f.querySelector('figcaption').textContent;lb.classList.add('on')}));lb.addEventListener('click',()=>lb.classList.remove('on'))}
