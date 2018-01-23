var menudots = document.querySelectorAll('.menuItems');
var menu = document.querySelector('.logomenu');
var click=false;
menu.addEventListener('click',function(){
  menudots[0].classList.toggle('croix-opacity');
  menudots[1].classList.toggle('croix1');
  menudots[2].classList.toggle('croix-opacity');
  menudots[3].classList.toggle('croix2');
  menudots[4].classList.toggle('croix3');
  menudots[5].classList.toggle('croix2');
  menudots[6].classList.toggle('croix-opacity');
  menudots[7].classList.toggle('croix4');

})
// MENU //
var menulist=document.querySelectorAll('.navItems');
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
      })
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
menu.addEventListener('click',function(){


  if(click===false)
  {
    click=true;
    delay=0;
    for(var i =0;i<menulist.length;i++)
    {
      menulist[i].style.left='-100%';
    menulist[i].style.animation= "animMenuOn .3s ease-in-out forwards";
      menulist[i].style.animationDelay=delay+"s";
      delay=delay+.2;
  }}
  else
  {
    click=false;
    delay=0;
    for(var i =0;i<menulist.length;i++)
    {
      menulist[i].style.left='0';
      menulist[i].style.animation= "animMenuOff .3s ease-in-out forwards";
      menulist[i].style.animationDelay=delay+"s";
      delay=delay+.2;
  }
}

});
  /*else{
    click=undefined;
}
/*for(var i =0;i<menulist.length;i++)
{
  menulist[i].style.animation="animMenuOff .3s ease-in-out forwards";
}
}
})*/
