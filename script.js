var ul = document.querySelector('nav ul');
var menu = document.querySelector('.menu i')

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}