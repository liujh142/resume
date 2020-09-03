function $(selector){
    return document.querySelector(selector);
}
window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop > 60){
        $('.nav-bar').classList.add('nav-bar-bg')
        $('header').setAttribute('style','min-height:40px')
    }else{
        $('.nav-bar').classList.remove('nav-bar-bg')
        $('header').setAttribute('style','min-height:0px');
    }
    if(document.documentElement.scrollTop > 400){
        $('.menu-items:first-child').classList.remove('nav-active')
    }else{
        $('.menu-items:first-child').classList.add('nav-active')
    }
})
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
