$(function(){


// <!-- =======================nav part goes to here=============== -->

    let day_night =document.querySelector('.day_night')
    let menu_toggle =document.querySelector('.menu_toggle')
    let body =document.querySelector('body')
    let navigation =document.querySelector('.navigation')

    day_night.onclick = function(){
        body.classList.toggle('dark')
        day_night.classList.toggle('active')
    }


    menu_toggle.onclick = function(){
      
        menu_toggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }




// <!-- =======================nav part goes to here=============== -->
// <!-- =======================nav part goes to here=============== -->
// <!-- =======================nav part goes to here=============== -->

});