console.log('This file is loaded');

let siteLinks = document.getElementsByClassName('moreLinks__link');
let page = document.body;
let siteClass = '';
console.log(siteClass = siteLinks[1].getAttribute('id'));

for (var i = 0; i < siteLinks.length; i++) {

    siteLinks[i].onclick = function() {

        siteClass = this.getAttribute('id');
        console.log(siteClass);
        page.className = '';
        page.className = siteClass;
    }

}

let showMenuBtn = document.getElementById('menuIcon');
let nav = document.getElementById('mainNav');

showMenuBtn.onclick = ()=> {
    showMenuBtn.classList.toggle('open');
    nav.classList.toggle('show');
}