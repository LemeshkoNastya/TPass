// Magic string
const classBurger = '.burger';
const classSidebar = '.sidebar';
const classShadowed = '.shadowed';
const classLink = '.list__link';
const classDisplayNone = 'none';
const classDisplayBlock = 'block';
const classBurgerRotate = 'burger__rotate';
const classSidebarActive = 'sidebar__active';
const classScroll = 'scroll__not';

// Variables
const burger = document.querySelector(classBurger);
const sidebar = document.querySelector(classSidebar);
const shadowed = document.querySelector(classShadowed);
const links = document.querySelectorAll(classLink);

let navOpen = false;

// Function
const hideBurger = () => {
    shadowed.style.display = classDisplayNone;
    burger.classList.remove(classBurgerRotate);
    sidebar.classList.remove(classSidebarActive);
    document.body.classList.remove(classScroll);
}

// Events
burger.addEventListener('click', () => {
    navOpen = !navOpen;
    if (navOpen) {
        shadowed.style.display = classDisplayBlock;
        burger.classList.add(classBurgerRotate);
        sidebar.classList.add(classSidebarActive);
        document.body.classList.add(classScroll);
    } else {
        hideBurger()
    }
});

shadowed.addEventListener('click', () => {
    hideBurger()
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hideBurger()
    });
});