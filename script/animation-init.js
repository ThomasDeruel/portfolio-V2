// APPEAR MENU after scroll
var scroll = document.querySelector('.scroll');
var sectionWork = document.querySelector('.works');
var sectionAbout = document.querySelector('.aboutAndContact');
var footer = document.querySelector('.footer');
var displayBlock = function(section){
  section.style.display="block";
}

scroll.addEventListener('animationstart',function(){
  displayBlock(sectionWork);
  displayBlock(sectionAbout);
    displayBlock(footer);
  AOS.init();
})                                  
