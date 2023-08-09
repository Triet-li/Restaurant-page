
import './style.css';
import Icon from "./assets/022-14.jpg"


 function bar() {
    
    const div = document.createElement("div");
    div.classList.add("main-bar");
    
    const nav = document.createElement("div");
    nav.classList.add("nav");

    const icon = new Image();
    icon.src = Icon;
    icon.classList.add("icon");

    const home = document.createElement("p");
    home.classList.add("nav-hov");
    home.textContent = "Home";
   

    const menu = document.createElement("p");
    menu.classList.add("nav-hov");
    menu.textContent = "Menu";
   

    const contact = document.createElement("p");
    contact.classList.add("nav-hov");
    contact.textContent = "Contact";
   

    div.appendChild(icon);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    div.appendChild(nav);
    return {div, home, menu, contact};
}

export { bar }