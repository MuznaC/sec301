
/* hamburger menu */

document.getElementById('hamburger').addEventListener('click', function(){
    console.log("menu icon is clicked");
    let mobile_nav = document.querySelector('.nav-links');
    mobile_nav.classList.toggle('show');

});








/*document.getElementsByClassName('hamburger').addEventListener('click', function(){
    console.log("menu icon is clicked");
    let mobile_nav = document.querySelector('.nav-links');

    mobile_nav.classList.toggle('show');
});*/