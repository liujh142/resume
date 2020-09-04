function $(selector){
    return document.querySelector(selector);
}
function hiFrequency(fn,delay){
    var timer = null;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        setTimeout(function(){
            fn();
        },delay)
    }
}

function scrollLisiner(){
    window.addEventListener('scroll',function(){
        var navBar = $('.nav-bar');
        var header = $('header');
        var menuItemsFirstChild = $('.menu-items:first-child')
        switch(document.documentElement.clientHeight != document.documentElement.scrollHeight){ //判断是否出现滚动条，但是这种写法也太丑了 需要优化
            case document.documentElement.scrollTop > 60 :
                navBar.classList.add('nav-bar-bg')
                header.setAttribute('style','min-height:40px')
            case document.documentElement.scrollTop > 400 :
                menuItemsFirstChild.classList.remove('nav-active')
                break;
            default :
                navBar.classList.remove('nav-bar-bg');
                header.setAttribute('style','min-height:0px');
                menuItemsFirstChild.classList.add('nav-active');
        }
    })
}
scrollLisiner();
// hiFrequency(scrollLisiner,10);
// window.addEventListener('scroll',function(){
//     if(document.documentElement.scrollTop > 60){
//         $('.nav-bar').classList.add('nav-bar-bg')
//         $('header').setAttribute('style','min-height:40px')
//     }else{
//         $('.nav-bar').classList.remove('nav-bar-bg')
//         $('header').setAttribute('style','min-height:0px');
//     }
//     if(document.documentElement.scrollTop > 400){
//         $('.menu-items:first-child').classList.remove('nav-active')
//     }else{
//         $('.menu-items:first-child').classList.add('nav-active')
//     }
// })


// $('.scroll-top').onclick = function(){
//     var scrollTop = setInterval(function(){
//         document.documentElement.scrollTop = document.documentElement.scrollTop  -  5;
//         if(document.documentElement.scrollTop == 0){
//             clearInterval(scrollTop);
//         }
//     },1)
// }
function scrollButton(){
    document.documentElement.scrollTop = document.documentElement.scrollTop - 5;
    if(document.documentElement.scrollTop == 0){
        return 0;
    }
    requestAnimationFrame(scrollButton);
}

$('.scroll-top').onclick = scrollButton;


$('.menu-button').onclick = function(){
    $('.sidebar').classList.add('sidebar-active');  
    $('.overlay').setAttribute('style','display:block');
    $('html').setAttribute('style','overflow: hidden')
}
$('.close-button').onclick = function(){
    $('.sidebar').classList.remove('sidebar-active');
    $('.overlay').setAttribute('style',"display:none");
    $('html').setAttribute('style','overflow:visible')
}
$('.overlay').onclick = function(){
    $('.sidebar').classList.remove('sidebar-active');
    $('.overlay').setAttribute('style',"display:none");
    $('html').setAttribute('style','overflow:visible')
}
