console.log('This file is loaded');

let siteLinks = document.getElementsByClassName('moreLinks__link');
let page = document.body;
let siteClass = '';

for (var i = 0; i < siteLinks.length; i++) {

    siteLinks[i].onclick = function() {

        siteClass = this.getAttribute('id');
        console.log(siteClass);
        page.className = '';
        page.className = siteClass;
    }

}

let showMenu = document.getElementById('menuIcon');
let nav = document.getElementById('mainNav');

showMenu.onclick = ()=> {
    nav.classList.toggle('show');
}