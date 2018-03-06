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
/* ANIMATION DETAILS */
var btnPrev = document.querySelector('.project_previous');
var btnNext = document.querySelector('.project_next');
var arrowPrev = document.querySelector('.arrow_previous');
var titlePrev = document.querySelector('.project_previous_name_title');
var arrowNext = document.querySelector('.arrow_next');
var titleNext = document.querySelector('.project_next_name_title');

var btnAnimation = function(arrow,title)
{
  arrow.classList.toggle('--action');
  title.classList.toggle('--action');
};

btnPrev.addEventListener('mouseover',function(){
btnAnimation(arrowPrev,titlePrev);
});
btnPrev.addEventListener('mouseout',function(){
btnAnimation(arrowPrev,titlePrev);
});

btnNext.addEventListener('mouseover',function(){
btnAnimation(arrowNext,titleNext);
});
btnNext.addEventListener('mouseout',function(){
btnAnimation(arrowNext,titleNext);
});


var works = document.querySelectorAll('.worksItems');
var workslink = document.querySelectorAll('.worksItemsTitle');
var projectUi = document.querySelector('.project');
var projectContainer = document.querySelector('.project_container')
var back = document.querySelector('.project_back');
var contact = document.querySelector('.contact');
var about = document.querySelector('.about');

//Gérer data
for (var i = 0; i < workslink .length; i++) {
 workslink[i].textContent= data[i].name;
  workslink[i].setAttribute('data-date',data[i].date);
};


/* transition worksItems and detail */
for (let w = 0; w < works.length; w++) {
 works[w].addEventListener('click',function(){
   projectUi.style.display="block";
   projectUi.style.animation="opacity ease 2s forwards";
 });
 }

 back.addEventListener('click',function(){
   projectUi.style.animation="opacityOff ease 2s forwards";
   setTimeout(function(){ projectUi.style.display="none"; }, 2000);
 });

/*back.addEventListener('click',function(){
  projectUi.style.left='125%';
  contact.style.display="block";
  about.style.display="block";
});*/
// animation work hover
var bgBorder = document.querySelectorAll('.bg-border');
var bg = document.querySelector('.bg');
var bgNumber = document.querySelectorAll('.worksItemsNumber');

for (let w = 0; w < works.length; w++) {
var padding = works[w].style.paddingLeft;
 workslink[w].addEventListener('mouseover',function(){
   for (var b = 0;b<bgBorder.length; b++) {
     bgBorder[b].style.width="0";
     bgNumber[w].style.color=data[w].color;
     workslink[w].setAttribute('data-color',data[w].color);
     bgNumber[w].style.background=data[w].colorBg;
     bg.style.background=data[w].colorBg;
   }

  var padInit = works[0].style.paddingLeft;
   for (var j = 0; j < works.length; j++) {
     works[w].style.color=data[w].color;
     if(works[j]!==works[w]){
       works[j].style.opacity="0.2";
       bgNumber[j].style.background=data[w].colorBg;
       if(works[0].offsetWidth > 710)
       {
         works[j].style.paddingLeft = '22.5%';
       }
     }
   }
});

workslink[w].addEventListener('mouseout',function(){
  for (var j = 0; j < works.length; j++) {
    for (var b = 0;b<bgBorder.length; b++) {
      bgBorder[b].style.width="100%";
      bgNumber[w].style.color="#e4e4e4";
      bgNumber[w].style.background="#121212";
      bg.style.background=data[w].colorBg;
    }
    if(works[j]!==works[w]){
      works[w].style.color="#e4e4e4";
      bgNumber[j].style.background="#121212";
      works[j].style.opacity="1";
      works[j].style.paddingLeft=padding ;
    }
  }
});
}
