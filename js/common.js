const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');
searchEl.addEventListener('click',function(){
  searchInputEl.focus();
  searchInputEl.setAttribute("placeholder",'통합검색');
  searchEl.classList.add("focused");
});
searchInputEl.addEventListener('blur',function(){
  searchInputEl.setAttribute("placeholder",'');
  searchEl.classList.remove("focused");
});

const thisYear =document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();