

var sideMenu = document.getElementById("side-menu"); 

var openSideMenu;

var closeSideMenu;

function openMenu () {
    console.log("Open");
    
    openSideMenu = sideMenu.style.right = "0", sideMenu.style.transition = ".4s";
}

function closeMenu () {
    console.log("Close");

    closeSideMenu = sideMenu.style.right = "-60%";
}