document.querySelector('.burger')?.addEventListener('click',()=>document.querySelector('nav ul').classList.toggle('open'));
document.getElementById('quote')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
const t=`Hello Charles Roofing, I'm ${f.get('name')} (${f.get('phone')}). Service: ${f.get('service')}. ${f.get('msg')}`;
window.open('https://wa.me/447057720554?text='+encodeURIComponent(t),'_blank');});
