var navBar = document.querySelector('.nav-bar')
window.addEventListener('scroll', function(e){
    if(document.documentElement.scrollTop > 60){
        navBar.classList.add('nav-bar-bg');
    }else{
        navBar.classList.remove('nav-bar-bg')
    }
    // if(document.documentElement.scrollTop < 60){
    //     navBar.classList.remove('nav-bar-bg')
    // }
  })