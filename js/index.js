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
})
$('.scroll-top').onclick = function(){
    var scrollTop = setInterval(function(){
        document.documentElement.scrollTop = document.documentElement.scrollTop  -  5;
        if(document.documentElement.scrollTop == 0){
            clearInterval(scrollTop);
        }
    },1)
}
$('.menu-button').onclick = function(){
    $('.sidebar').setAttribute('style','right:0px;display:block');  
    $('.overlay').setAttribute('style','display:block');
    $('html').setAttribute('style','overflow: hidden')
}