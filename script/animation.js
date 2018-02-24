var menudots = document.querySelectorAll('.menuItems');
var menu = document.querySelector('.logomenu');
var sectionMenu = document.querySelector('.menu')
var click=false;
var fixed = false;
var dotsAnimation = function(){
  menu.classList.add('fixed');
  menudots[0].classList.toggle('croix-opacity');
  menudots[1].classList.toggle('croix1');
  menudots[2].classList.toggle('croix-opacity');
  menudots[3].classList.toggle('croix2');
  menudots[4].classList.toggle('croix3');
  menudots[5].classList.toggle('croix2');
  menudots[6].classList.toggle('croix-opacity');
  menudots[7].classList.toggle('croix4');
}
menu.addEventListener('click',dotsAnimation);
sectionMenu.addEventListener('click',dotsAnimation);

// MENU //
var menulist=document.querySelectorAll('.navItems');
var navContainer = document.querySelector('.navigationContainer')
var menuAnim=document.querySelectorAll('.navItemsAnimation');
var listMenu=[document.querySelector('.navItemsPortfolio'),document.querySelector('.navItemsWorks'),document.querySelector('.navItemsAbout')];
for(let i =0;i<menulist.length;i++)
  {
    menulist[i].addEventListener("animationend", function(){
    this.addEventListener('mouseenter',function(){

      this.style.color='rgb(2,2,2,0.10)';
      this.style.color='rgba(2,2,2,0.10)';
      listMenu[i].style.color="#232323";
      menuAnim[i].style.width="100%";
      })
          menulist[i].addEventListener('mouseleave',function(){
      this.style.color='white';

      menuAnim[i].style.width="0";
      listMenu[i].style.color="rgb(228,228,228,0.02)";
      listMenu[i].style.color="rgba(228,228,228,0.02)";
    });
      });
  }

menulist[0].addEventListener('mouseleave',function(){
  for(var j=0;j<menudots.length;j++)
    {
      menudots[j].style.background="white";
    }
})
menulist[0].addEventListener('mouseenter',function(){
  for(var j=0;j<menudots.length;j++)
    {
      menudots[j].style.background="#232323";
    }
})
var navigationAnimation = function(){
  if(click===false)
  {
    navContainer.style.left="0";
    navContainer.style.transition="all .3s";
    delay=0;
    for(var i =0;i<menulist.length;i++)
    {
      menulist[i].style.left='-100%';
      menulist[i].style.animation= "animMenuOn .3s ease-in-out forwards";
      menulist[i].style.animationDelay=delay+"s";
      delay=delay+.2;
    }
    click=true;
  }
  else
  {
    delay=0;
    for(var j =0;j<menulist.length;j++)
    {
      menulist[j].style.left='0';
      menulist[j].style.animation= "animMenuOff .3s ease-in-out forwards";
      menulist[j].style.animationDelay=delay+"s";
      delay=delay+.2;
    }
        navContainer.style.left="-100%";
        navContainer.style.transition="all 4s";
        click=false;
  }
}

menu.addEventListener('click',navigationAnimation);
sectionMenu.addEventListener('click',navigationAnimation);
