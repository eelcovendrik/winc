let button = document.querySelector(".btn-toggle-nav");
button.addEventListener('click',function(){toggleNav()});

let toggleNavStatus  = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
        
    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        toggleNavStatus = true;       
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.visibility = "hidden";
        toggleNavStatus = false;       
    }


}

bodyElement = document.body;

getRed = document.querySelector("#home");
getRed.addEventListener('click',function(){goHome()});

getRed = document.querySelector("#red");
getRed.addEventListener('click',function(){makeRed()});

getOrange = document.querySelector("#orange");
getOrange.addEventListener('click',function(){makeOrange()});

getPurple = document.querySelector("#purple");
getPurple.addEventListener('click',function(){makePurple()});

getGreen = document.querySelector("#green");
getGreen.addEventListener('click',function(){makeGreen()});

goHome = function() {
    bodyElement.classList.remove('red-background');
    bodyElement.classList.remove('orange-background');
    bodyElement.classList.remove('purple-background');
    bodyElement.classList.remove('green-background');
    toggleNav();
}


makeRed = function() {
    bodyElement.classList.add('red-background');
    bodyElement.classList.remove('orange-background');
    bodyElement.classList.remove('purple-background');
    bodyElement.classList.remove('green-background');
    toggleNav();
}

makeOrange = function() {
    bodyElement.classList.remove('red-background');
    bodyElement.classList.add('orange-background');
    bodyElement.classList.remove('purple-background');
    bodyElement.classList.remove('green-background');
    toggleNav();
}

makePurple = function() {
    bodyElement.classList.remove('red-background');
    bodyElement.classList.remove('orange-background');
    bodyElement.classList.add('purple-background');
    bodyElement.classList.remove('green-background');
    toggleNav();
}

makeGreen = function() {
    bodyElement.classList.remove('red-background');
    bodyElement.classList.remove('orange-background');
    bodyElement.classList.remove('purple-background');
    bodyElement.classList.add('green-background');
    toggleNav();
}