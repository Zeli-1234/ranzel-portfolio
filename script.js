// Floating background shapes
document.querySelectorAll('.animated-background span').forEach(span=>{
  span.style.left = Math.random()*100+'vw';
  span.style.animationDelay = Math.random()*20+'s';
});

// Page flip logic
const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let current = 0;

function showPage(index){
  pages.forEach((page,i)=>{ page.classList.remove('active'); if(i===index) page.classList.add('active'); });
}

nextBtn.addEventListener('click', ()=>{
  current++; if(current>=pages.length) current=pages.length-1; showPage(current);
});
prevBtn.addEventListener('click', ()=>{
  current--; if(current<0) current=0; showPage(current);
});
