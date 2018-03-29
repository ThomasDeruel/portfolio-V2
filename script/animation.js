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
};
menu.addEventListener('click',dotsAnimation);
sectionMenu.addEventListener('click',dotsAnimation);
// MENU //
var menulist=document.querySelectorAll('.navItems');
var linklist = document.querySelectorAll('.navItems-link')
var navContainer = document.querySelector('.navigationContainer')
var menuAnim=document.querySelectorAll('.navItemsAnimation');
var listMenu=[document.querySelector('.navItemsPortfolio'),document.querySelector('.navItemsWorks'),document.querySelector('.navItemsAbout')];
for(let i =0;i<menulist.length;i++)
  {
    menulist[i].addEventListener("animationend", function(){
    this.addEventListener('mouseenter',function(){

      linklist[i].style.color="rgba(2,2,2,0.10)";
      linklist[i].style.color="rgb(2,2,2,0.10)";
      listMenu[i].style.color="#232323";
      menuAnim[i].style.width="100%";
      })
          menulist[i].addEventListener('mouseleave',function(){
      linklist[i].style.color='#e4e4e4';
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
};
menu.addEventListener('click',navigationAnimation);
sectionMenu.addEventListener('click',navigationAnimation);
var works = document.querySelectorAll('.worksItems');//---------------------------------------
var workslink = document.querySelectorAll('.worksItemsTitle');
var projectUi = document.querySelector('.project');
var projectContainer = document.querySelector('.project_container')
var back = document.querySelector('.project_back');
var contact = document.querySelector('.contact');
var about = document.querySelector('.about');
var index;
//Gérer data_date
for (var i = 0; i < workslink .length; i++) {
 workslink[i].textContent= data[i].name;
  workslink[i].setAttribute('data-date',data[i].date);
};
/* transition worksItems and detail + data */
var bgBorder = document.querySelectorAll('.bg-border');
var bg = document.querySelector('.bg');
var bgMemo = bg.style.background;
var bgNumber = document.querySelectorAll('.worksItemsNumber');
var dataTitle = document.querySelector('.data_title');
var dataBg = document.querySelector('.project_header');
var dataDate = document.querySelector('.data_date');
var dataContent = document.querySelector('.project_subject_content');
var dataTools = document.querySelector('.data_tools');
var dataLink = document.querySelector('.data_link');
var dataColors = document.querySelectorAll('.data_color');
var previous = document.querySelector('.project_previous');
var next = document.querySelector('.project_next');
var btnContainer = document.querySelector('.project_button');
var projectNumb = document.querySelector('.project_number');
var titlePrev = document.querySelector('.project_previous_name_title');
var titleNext = document.querySelector('.project_next_name_title');
var imgs = document.querySelectorAll('.projectimg');
var myData = function(index)
{
  if(index === 0)
  {
    previous.style.display="none";
    btnContainer.style.justifyContent="flex-end";
  }
  else if(index === (works.length-1))
  {
    next.style.display="none";
    btnContainer.style.justifyContent="flex-start";
  }
  else{
    previous.style.display="flex";
    next.style.display="flex";
    btnContainer.style.justifyContent="space-between";
  }
  dataBg.style.background= data[index].bgOne;
  dataBg.style.background= data[index].bgTwo;
  dataTitle.textContent = data[index].name;
  dataDate.textContent = data[index].date;
  dataTools.textContent = data[index].tools;
  dataContent.innerHTML =data[index].content;
  dataLink.setAttribute('href',data[index].link);
  //
  for (var j = 0; j < dataColors.length; j++) {
    dataColors[j].style.color=data[index].color;
  };
  for (var k = 0; k < imgs.length; k++) {
    imgs[k].src = data[index].pictures[k];
  }
  projectNumb.textContent = "0"+(index+1)+"/"+"0"+(works.length);

  if(index > 0){
    titlePrev.textContent=data[index-1].name;
  }
  if(index < (works.length-1)){
    titleNext.textContent=data[index+1].name;
  }
};
var bgMemo;
for (let w = 0; w < works.length; w++) {
var padding = works[w].style.paddingLeft;
 workslink[w].addEventListener('mouseover',function(){
   for (var b = 0;b<bgBorder.length; b++) {
     bgBorder[b].style.width="0";
     bgNumber[w].style.color=data[w].color;
     workslink[w].setAttribute('data-color',data[w].color);
     bgNumber[w].style.background=data[w].colorBg;
     bg.style.background=data[w].colorBg;
     bgMemo = data[w].colorBg;
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
});}
// mouseout of workslink
var Worksmouseout = function(){
  for (var w = 0; w < workslink.length; w++) {
  for (var j = 0; j < works.length; j++) {
    for (var b = 0;b<bgBorder.length; b++) {
      bgBorder[b].style.width="100%";
      bgNumber[w].style.color="#e4e4e4";
      bgNumber[w].style.background="#121212";
      bg.style.background=bgMemo;
    };
    if(works[j]!==works[w]){
      works[w].style.color="#e4e4e4";
      bgNumber[j].style.background="#121212";
      works[j].style.opacity="1";
      works[j].style.paddingLeft=padding ;
    };
  };
  };
};
for (var w = 0; w < workslink.length; w++) {
  workslink[w].addEventListener('mouseout', Worksmouseout);
}
// important ici faire un remove event pour cela, on doit créer une fonction externe de l'event;
var home = document.querySelector('.home');
var workTitle = document.querySelector('.worksTitle');
var worksContainer = document.querySelector('.works');
var aboutContainer = document.querySelector('.aboutAndContact');
var elemsAbout = document.querySelectorAll('.about');
var pic = document.querySelector('.aboutAndContact_Picture');
var content = document.querySelector('.aboutAndContact_content_container');
var keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
};
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
};
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
};
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
};
for (let w = 0; w < works.length; w++) {
 workslink[w].addEventListener('click',function(){
   disableScroll();
   myData(w);
   //ON RECUPERE L'INDEX;
   index = w;
   /* animation a faire*/
   delay=0;
   home.classList.add('transition');
   workTitle.removeAttribute('data-aos');
   worksContainer.removeAttribute('data-aos');
   pic.removeAttribute('data-aos');
   content.removeAttribute('data-aos');
   workTitle.classList.add('transition');
   // transition all worksItem (opacity 1 to 0 + translate X)
   //fait disperaitre les block a la fin de l'animation;
   var transit_to_detail = function(myDelay,container,container2,container3,container4){
     myDelay = myDelay * 1000;
     var id = setTimeout(function(){

       projectUi.style.display="block";
       window.scrollTo(0,0);
       projectUi.style.animation="opacity ease 1s forwards";
       projectUi.addEventListener('animationend',function(){
         container.style.display="none";
         container2.style.display='none';
         container3.style.display="none";
         container4.style.display="none";
        enableScroll();
      });
     },myDelay)
   };
   for (var m = 0; m < works.length; m++) {
    works[m].classList.add('transition2');
    works[m].style.transitionDelay= delay +'s';
    delay = delay+.08;
     }
    for (var n = 0; n < elemsAbout.length; n++) {
      elemsAbout[n].classList.add('transition3');
      elemsAbout[n].style.transitionDelay= delay +'s';
      delay = delay+.08;
    }
  transit_to_detail(delay,worksContainer,aboutContainer,aboutContainer,bg);
});
 }
 back.addEventListener('click',function(){
   projectUi.style.animation="opacityOff ease 2s forwards";
   setTimeout(function(){ projectUi.style.display="none"; }, 2000);
 });
// bouton smooth
var smooth = function(){
  var i = Math.round(window.scrollY);
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i -= 100;
     console.log(i);
    if (i === 0 || i<=0)
    { window.scrollTo (0,0);
      clearInterval(int);
    }
  }, 10);
}
// CARROUSEL
next.addEventListener('click',function(){
  index++;
  myData(index);
  smooth();
})
previous.addEventListener('click',function(){
  index--;
  myData(index);
  smooth();
  //window.scrollTo(0,0);
})
/* ANIMATION DETAILS */
var btnPrev = document.querySelector('.project_previous');
var btnNext = document.querySelector('.project_next');
var arrowPrev = document.querySelector('.arrow_previous_icon');
var arrowNext = document.querySelector('.arrow_next_icon');
var actionBtn = document.querySelectorAll('.--action');
var btnAnimationNext = function(arrow,title)
{
  arrow.style.fill=data[index+1].colorBg;
  title.style.color=data[index+1].colorBg;
};
var btnAnimationBefore = function(arrow,title)
{
    arrow.style.fill=data[index-1].colorBg;
    title.style.color=data[index-1].colorBg;
};
var btnAnimationDefaut = function(arrow,title)
{
  arrow.style.fill="#ffffff";
  title.style.color="#ffffff";
};
btnPrev.addEventListener('mouseover',function(){
btnAnimationBefore(arrowPrev,titlePrev);
});
btnPrev.addEventListener('mouseout',function(){
btnAnimationDefaut(arrowPrev,titlePrev);
});
btnNext.addEventListener('mouseover',function(){
btnAnimationNext(arrowNext,titleNext);
});
btnNext.addEventListener('mouseout',function(){
btnAnimationDefaut(arrowNext,titleNext);
});
//animation Pic face
var picFace_one = document.querySelector('.profil_one_bg');
var picFace_two = document.querySelector('.flex-end');
var picone = document.querySelector('.profil_one_img');
var pictwo = document.querySelector('.profil_two_img');
var pictext = document.querySelector('.profil_two_text_container');
var picOnMouseOver = function(one,two){
  one.addEventListener('mouseenter',function(){
    pictwo.style.opacity="0";
    pictext.style.opacity="1";
  })
  two.addEventListener('mouseenter',function(){
    pictwo.style.opacity="0";
    pictext.style.opacity="1";
  })
};
picOnMouseOver(picFace_one,picFace_two);
